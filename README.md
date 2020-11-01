
# eShop
Angular 10, node express Ecommerce Application with NGRX state management

## Get started

### Clone the repo

```shell
https://github.com/raymond-frontend/eShop.git
cd eShop
```

### Install npm packages

Install the `npm` packages described in the `package.json` and verify that it works:

```shell
npm install
npm start
```

The `npm start` command builds (compiles TypeScript and copies assets) the application into `dist/`, watches for changes to the source files, and runs `lite-server` on port `3000`.

Shut it down manually with `Ctrl-C`.

#### npm scripts

These are the most useful commands defined in `package.json`:

* `npm start` - runs the TypeScript compiler, asset copier, and a server at the same time, all three in "watch mode".
* `npm run build` - runs the TypeScript compiler and asset copier once.
* `npm run build:watch` - runs the TypeScript compiler and asset copier in "watch mode"; when changes occur to source files, they will be recompiled or copied into `dist/`.
* `npm run lint` - runs `tslint` on the project files.
* `npm run serve` - runs `lite-server`.

These are the test-related scripts:

* `npm test` - builds the application and runs Intern tests (both unit and functional) one time.
* `npm run ci` - cleans, lints, and builds the application and runs Intern tests (both unit and functional) one time.


## Techniques

Because Intern seamlessly handles asynchronous testing, there is no reason to use `async`, `fakeAsync`, or `tick` from `@angular/core/testing`. Furthermore, because TypeScript introduced downlevel asynchronous function support in version 2.1, the use of `async` and `await` has been leveraged to write these tests.

### Intern `bdd` interfaces

The first change made to all spec files was to assign the `describe`, `it`, `beforeEach`, and `expect` functions from the Intern plugins:

```ts
const { describe, it, beforeEach } = intern.getPlugin('interface.bdd');
const { expect } = intern.getPlugin('chai');
```

Most of these interfaces behave similarly to jasmine or mocha with a couple of exceptions. First, `before`, `after`, `beforeEach`, `afterEach`, and `it` can all take a function that returns a promise or is defined with `async` and Intern will wait until that promise has resolved before proceeding to the next test/lifecycle function.

**It should be noted** that Intern currently (alpha.9) does not wait for a promise to resolve if there are multiple of the same lifecycle functions in one `describe` block. For instance, this is quite common to see in Angular tests:

```ts
beforeEach(async(() => {
	TestBed.configureTestingModule({
		declarations: [ DashboardHeroComponent ],
	})
	.compileComponents();
}));

beforeEach(() => {
	fixture = TestBed.createComponent(DashboardHeroComponent);
	comp    = fixture.componentInstance;
	heroEl  = fixture.debugElement.query(By.css('.hero'));
});
```

Using `async` and `await`, this can be easily rewritten into a single function with Intern:

```ts
beforeEach(async () => {
	await TestBed.configureTestingModule({
		declarations: [ DashboardHeroComponent ],
	})
	.compileComponents();

	fixture = TestBed.createComponent(DashboardHeroComponent);
	comp    = fixture.componentInstance;
	heroEl  = fixture.debugElement.query(By.css('.hero'));
});
```

Since Intern comes with Chai bundled, many of the expectations had to be rewritten. Most of these were simply changing `.toBe()` to `.to.equal()` or `toMatch()` to `to.match()`.

Another change was from using jasmine's `spyOn()` to Sinon.JS's `spy()` and `stub()` as well as `sinon-chai` to add expectations for stubs and spies to `expect()`.

### Asynchronous functions

Similar to the lifecycle functions, any invocation of `it` that used Angular's `async()` or `fakeAsync()` was rewritten to use an asynchronous function. For instance:

```ts
it('should show quote after getQuote promise (async)', async(() => {
	fixture.detectChanges();

	fixture.whenStable().then(() => { // wait for async getQuote
		fixture.detectChanges();        // update view with quote
		expect(el.textContent).toBe(testQuote);
	});
}));

it('should select hero on click', fakeAsync(() => {
	const expectedHero = HEROES[1];
	const li = page.heroRows[1];
	li.dispatchEvent(newEvent('click'));
	tick();
	// `.toEqual` because selectedHero is clone of expectedHero; see FakeHeroService
	expect(comp.selectedHero).toEqual(expectedHero);
}));
```

These can be easily rewritten to the following:

```ts
it('should show quote after getQuote promise', async () => {
	fixture.detectChanges();

	await fixture.whenStable(); // wait for async getQuote
	fixture.detectChanges();    // update view with quote
	expect(el.textContent).to.equal(testQuote);
});

it('should select hero on click', async () => {
	const expectedHero = HEROES[1];
	const li = page.heroRows[1];
	li.dispatchEvent(newEvent('click'));
	await comp.heroes; // the promise returned from the service
	expect(comp.selectedHero).to.deep.equal(expectedHero);
});
```
