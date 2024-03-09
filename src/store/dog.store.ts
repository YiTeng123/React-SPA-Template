import { create } from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'
import { shallow } from 'zustand/vanilla/shallow'
const useDogStore = create(
    subscribeWithSelector(() => ({ paw: true, snout: true, fur: true })),
)
// 监视state.paw,并作为参数传给回调
const unsub2 = useDogStore.subscribe((state) => state.paw, console.log)
// 可以读取旧值
const unsub3 = useDogStore.subscribe(
    (state) => state.paw,
    (paw, previousPaw) => console.log(paw, previousPaw),
)
// 支持自定义比较函数
const unsub4 = useDogStore.subscribe(
    (state) => [state.paw, state.fur],
    console.log,
    { equalityFn: shallow },
)

export {
    unsub2, unsub3, unsub4
}