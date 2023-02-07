import { UnitTest } from 'unit-testing-js'
import { IS as is } from '..'

UnitTest((v, b) => is(v)(b), 'is')
	.addCases(
		{ params: [('String'), ('')], tobe: true },
		{ params: [('String[]'), ([''])], tobe: true },
		{ params: [('String[]'), ('')], tobe: false },
		{ params: [('[]'), ('')], tobe: false },
		{ params: [('[]'), ([])], tobe: true },

		{ params: [('Object[]'), ([{}])], tobe: true },
		{ params: [('Object[]'), ('')], tobe: false },

		{ params: [('[Object, String]'), ([])], tobe: false },
		{ params: [('[Object, String]'), ([{}, ''])], tobe: true },
		{ params: [('[Object,String]'), ([{}, ''])], tobe: true },
		{ params: [('[Object,String]'), ([{}, {}])], tobe: false },

		{ params: [`{a: Object, b: String}`, { a: {}, b: '' }], tobe: true },
		{
			params: [`{a: Object, b: {
			bc: String
		}}`, {
					a: {}, b: {
						bc: 'bbcc'
					}
				}], tobe: true
		},
				{
			params: [`{a: Object, b: {
			bc: Number
		}}`, {
					a: {}, b: {
						bc: 'bbcc'
					}
				}], tobe: false
		},
		{ params: [{ bc: 'String' }, { bc: 'bcbc' }], tobe: true },
	)
	.run()

// console.log(

// 	JSON.parse((`{a: Object, b: {
// 			bc: String
// 		}}`).replace(/ |\n|\t/gi, '').replace(/(\w+)/gi, `"$&"`)),
// 	JSON.stringify({
// 		a: {}, b: {
// 			bc: 'bbcc'
// 		}
// 	})
// )