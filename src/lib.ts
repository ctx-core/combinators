/**
 * @see {@link https://gist.github.com/Avaq/1f0636ec5c8d6aed2e45}
 */
// export const I = x=>x
export function I<X extends unknown = unknown>(x:X) {
	return x
}
// export const K = x=>_=>x
export function K<X extends unknown = unknown>(x:X) {
	return _=>x
}
// export const A = f=>x=>f(x)
export function A<X extends unknown = unknown, O extends unknown = unknown>(f:(x:X)=>O) {
	return x=>f(x)
}
// export const T = x=>f=>f(x)
export function T<X extends unknown = unknown, O extends unknown = unknown>(x:X) {
	return (f:(x:X)=>O)=>f(x)
}
// export const W = f=>x=>f(x)(x)
export function W<X extends unknown = unknown, O extends unknown = unknown>(f:(x:X)=>(x:X)=>O) {
	return x=>f(x)(x)
}
// export const C = f=>y=>x=>f(x)(y)
export function C<X extends unknown = unknown, Y extends unknown = unknown, O extends unknown = unknown>(
	f:(x:X)=>(y:Y)=>O
) {
	return y=>x=>f(x)(y)
}
// export const B = f=>g=>x=>f(g(x))
export function B<X extends unknown = unknown, Og extends unknown = unknown, O extends unknown = unknown>(
	f:(og:Og)=>O
) {
	return (g:(x:X)=>Og)=>(x)=>f(g(x))
}
// export const S = f=>g=>x=>f(x)(g(x))
export function S<X extends unknown = unknown, Og extends unknown = unknown, O extends unknown = unknown>(
	f:(x:X)=>(og:Og)=>O
) {
	return (g:(x:X)=>Og)=>(x)=>f(x)(g(x))
}
// export const P = f=>g=>x=>y=>f(g(x))(g(y))
export function P</*@formatter:off*/
	X extends unknown = unknown,
	Y extends unknown = unknown,
	Ogx extends unknown = unknown,
	Ogy extends unknown = unknown,
	O extends unknown = unknown
/*@formatter:on*/>(f:(ogx:Ogx)=>(ogy:Ogy)=>O) {
	return (
		g:(a:(X|Y))=>(Ogx|Ogy)
	)=>(x:X)=>(y:Y)=>f(g(x) as Ogx)(g(y) as Ogy)
}
// export const Y = (f)=>(g=>g(g))(g=>f(x=>g(g)(x)))
export function Y</*@formatter:off*/
	X extends unknown = unknown,
	Of extends unknown = unknown,
	Off extends unknown = unknown,
/*@formatter:on*/>(
	f:(ff:(x:X)=>Of)=>Off
) {
	return (g=>g(g))(g=>f((x:X)=>g(g)(x)))
}
export function I__<O extends unknown = unknown, R extends unknown = unknown>(x:O, ..._:R[]) {
	return x
}
