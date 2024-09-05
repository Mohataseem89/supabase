import createSupabaseIcon from '../createSupabaseIcon';

/**
 * @component @name Mic
 * @description Supabase SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2Zz4gIDxwYXRoCiAgICBmaWxsPSJjdXJyZW50Q29sb3IiCiAgICBmaWxsUnVsZT0iZXZlbm9kZCIKICAgIGNsaXBSdWxlPSJldmVub2RkIgogICAgZD0iTTMuMzQ5MzkgNS43MDA2MkMzLjM0OTM5IDIuODU2NzEgNS42NTQ2NiAwLjU1MTI3IDguNDk4MzcgMC41NTEyN0MxMS4zNDIxIDAuNTUxMjcgMTMuNjQ3MyAyLjg1NjcxIDEzLjY0NzMgNS43MDA2MlY4LjY0MzExQzEzLjY0NzMgMTEuNDg3IDExLjM0MjEgMTMuNzkyNSA4LjQ5ODM3IDEzLjc5MjVDNS42NTQ2NiAxMy43OTI1IDMuMzQ5MzkgMTEuNDg3IDMuMzQ5MzkgOC42NDMxMVY1LjcwMDYyWk02LjI5MTY2IDguNjQzMTFDNi41OTYxOSA4LjY0MzExIDYuODQzMzQgOC4zOTU5NCA2Ljg0MzM0IDguMDkxMzlWNi4yNTIzNEM2Ljg0MzM0IDUuOTQ3NzkgNi41OTYxOSA1LjcwMDYyIDYuMjkxNjYgNS43MDA2MkM1Ljk4NzE0IDUuNzAwNjIgNS43Mzk5OSA1Ljk0Nzc5IDUuNzM5OTkgNi4yNTIzNFY4LjA5MTM5QzUuNzM5OTkgOC4zOTU5NCA1Ljk4NzE0IDguNjQzMTEgNi4yOTE2NiA4LjY0MzExWk04LjQ5ODM3IDkuMzc4NzNDOC44MDI4OSA5LjM3ODczIDkuMDUwMDQgOS4xMzE1NiA5LjA1MDA0IDguODI3MDJWNS41MTY3MkM5LjA1MDA0IDUuMjEyMTcgOC44MDI4OSA0Ljk2NSA4LjQ5ODM3IDQuOTY1QzguMTkzODQgNC45NjUgNy45NDY2OSA1LjIxMjE3IDcuOTQ2NjkgNS41MTY3MlY4LjgyNzAyQzcuOTQ2NjkgOS4xMzE1NiA4LjE5Mzg0IDkuMzc4NzMgOC40OTgzNyA5LjM3ODczWk0xMC43MDUxIDguNjQzMTFDMTEuMDA5NiA4LjY0MzExIDExLjI1NjcgOC4zOTU5NCAxMS4yNTY3IDguMDkxMzlWNi4yNTIzNEMxMS4yNTY3IDUuOTQ3NzkgMTEuMDA5NiA1LjcwMDYyIDEwLjcwNTEgNS43MDA2MkMxMC40MDA1IDUuNzAwNjIgMTAuMTUzNCA1Ljk0Nzc5IDEwLjE1MzQgNi4yNTIzNFY4LjA5MTM5QzEwLjE1MzQgOC4zOTU5NCAxMC40MDA1IDguNjQzMTEgMTAuNzA1MSA4LjY0MzExWiBNMS4zNzQxIDkuOTYyM0MxLjc2MzIxIDkuODQ0NjEgMi4xNzIxOSAxMC4wNjUzIDIuMjg5ODggMTAuNDU1MkMzLjA4MzU2IDEzLjEwMTIgNS41MjkzMiAxNS4wOCA4LjQ5OTU0IDE1LjA4QzExLjQ2OTggMTUuMDggMTMuOTE1NSAxMy4xMDEyIDE0LjcwOTkgMTAuNDU0NEMxNC44MjY5IDEwLjA2NDYgMTUuMjM3MyA5Ljg0NTM0IDE1LjYyNTcgOS45NjE1N0MxNi4wMTQxIDEwLjA3NzggMTYuMjM2MiAxMC40ODc1IDE2LjExODYgMTAuODc3NEMxNS4xNDY5IDE0LjExNjQgMTIuMTQ5NCAxNi41NTEzIDguNDk5NTQgMTYuNTUxM0M0Ljg0OTY1IDE2LjU1MTMgMS44NTIyMSAxNC4xMTY0IDAuODgxMjY1IDEwLjg3ODJDMC43NjM1NzQgMTAuNDg5IDAuOTg0MjQ0IDEwLjA4IDEuMzc0MSA5Ljk2MjNaIgogIC8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Supabase icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
const Mic = createSupabaseIcon('Mic', [
  [
    'path',
    {
      fill: 'currentColor',
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M3.34939 5.70062C3.34939 2.85671 5.65466 0.55127 8.49837 0.55127C11.3421 0.55127 13.6473 2.85671 13.6473 5.70062V8.64311C13.6473 11.487 11.3421 13.7925 8.49837 13.7925C5.65466 13.7925 3.34939 11.487 3.34939 8.64311V5.70062ZM6.29166 8.64311C6.59619 8.64311 6.84334 8.39594 6.84334 8.09139V6.25234C6.84334 5.94779 6.59619 5.70062 6.29166 5.70062C5.98714 5.70062 5.73999 5.94779 5.73999 6.25234V8.09139C5.73999 8.39594 5.98714 8.64311 6.29166 8.64311ZM8.49837 9.37873C8.80289 9.37873 9.05004 9.13156 9.05004 8.82702V5.51672C9.05004 5.21217 8.80289 4.965 8.49837 4.965C8.19384 4.965 7.94669 5.21217 7.94669 5.51672V8.82702C7.94669 9.13156 8.19384 9.37873 8.49837 9.37873ZM10.7051 8.64311C11.0096 8.64311 11.2567 8.39594 11.2567 8.09139V6.25234C11.2567 5.94779 11.0096 5.70062 10.7051 5.70062C10.4005 5.70062 10.1534 5.94779 10.1534 6.25234V8.09139C10.1534 8.39594 10.4005 8.64311 10.7051 8.64311Z M1.3741 9.9623C1.76321 9.84461 2.17219 10.0653 2.28988 10.4552C3.08356 13.1012 5.52932 15.08 8.49954 15.08C11.4698 15.08 13.9155 13.1012 14.7099 10.4544C14.8269 10.0646 15.2373 9.84534 15.6257 9.96157C16.0141 10.0778 16.2362 10.4875 16.1186 10.8774C15.1469 14.1164 12.1494 16.5513 8.49954 16.5513C4.84965 16.5513 1.85221 14.1164 0.881265 10.8782C0.763574 10.489 0.984244 10.08 1.3741 9.9623Z',
      key: '106fb3',
    },
  ],
]);

export default Mic;
