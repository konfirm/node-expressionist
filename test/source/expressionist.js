/* global source, describe, it, expect */

const Expressionist = source('expressionist');

describe('Expressionist', () => {
	describe('Escapes meaningfull characters', () => {
		const tests = [
			'john+doe@example.com',
			'hello (beautiful) world',
			'(a, b) => ({ a, b })'
		];

		tests.forEach((input) => {
			it(`escapes "${input}"`, (next) => {
				const escaped = Expressionist.escape(input);
				const regexA = new RegExp(`^${input}\$`);
				const regexB = new RegExp(`^${escaped}\$`);

				expect(regexA.test(input)).to.equal(false);
				expect(regexB.test(input)).to.equal(true);

				next();
			});
		});

		it('escapes "how **awesome** is this??"', (next) => {
			const input = 'how **awesome** is this??';
			const escaped = Expressionist.escape(input);
			const regex = new RegExp(`^${escaped}\$`);

			expect(() => new RexExp(`^${input}\$`)).to.throw(Error);

			expect(regex.test(input)).to.equal(true);

			next();

		});
	});

	describe('Replaces capture groups with non-capture groups', () => {
		const tests = [
			{ input: '(hello)', output: '(?:hello)' },
			{ input: '\\(hello)', output: '\\(hello)' },
			{ input: '(h(e(l(l(o))))', output: '(?:h(?:e(?:l(?:l(?:o))))' },
		];

		tests.forEach((test) => {
			it(`ungroups "${test.input}"`, (next) => {
				expect(Expressionist.ungroup(test.input)).to.equal(test.output);

				next();
			});
		});
	});
});
