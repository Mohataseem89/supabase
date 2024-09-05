import createSupabaseIcon from '../createSupabaseIcon';

/**
 * @component @name Briefcase
 * @description Supabase SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2Zz4gIDxwYXRoCiAgICBmaWxsLXJ1bGU9ImV2ZW5vZGQiCiAgICBjbGlwLXJ1bGU9ImV2ZW5vZGQiCiAgICBkPSJNNS45Njk2NyAyLjc4OTRDNS45Njk2NyAxLjg0MDcxIDYuNzM4NzMgMS4wNzE2NCA3LjY4NzQzIDEuMDcxNjRIOC4yNjAwMUM5LjIwODcxIDEuMDcxNjQgOS45Nzc3NyAxLjg0MDcxIDkuOTc3NzcgMi43ODk0VjMuMzYxOTlIMTMuNDg4MUMxNC44NzU0IDMuMzYxOTkgMTYgNC40ODY1OSAxNiA1Ljg3Mzg1QzE2IDYuNDI2MDggMTUuODE5IDYuOTUwMzEgMTUuNTAxMiA3LjM3NjE4VjEyLjA2NTRDMTUuNTAxMiAxMy42NDY2IDE0LjIxOTQgMTQuOTI4NCAxMi42MzgzIDE0LjkyODRIMy4zNjE3MUMxLjc4MDU2IDE0LjkyODQgMC40OTg3NzcgMTMuNjQ2NiAwLjQ5ODc3NyAxMi4wNjU0VjcuMzc2MThDMC4xODEwMzMgNi45NTAzMSAwIDYuNDI2MDggMCA1Ljg3Mzg1QzAgNC40ODY1OSAxLjEyNDYgMy4zNjE5OSAyLjUxMTg2IDMuMzYxOTlINS45Njk2N1YyLjc4OTRaTTIuNTExODYgNC41MDcxNkMxLjc1NzA2IDQuNTA3MTYgMS4xNDUxNyA1LjExOTA1IDEuMTQ1MTcgNS44NzM4NUMxLjE0NTE3IDYuMzk5OTggMS40NDcxOSA2Ljg3OTQgMS45MjE3NSA3LjEwNjU3TDUuMTcxMDkgOC42NjIwNUM1LjQ1NjMzIDguNzk4NTkgNS41NzY4NiA5LjE0MDUxIDUuNDQwMzIgOS40MjU3NEM1LjMwMzc4IDkuNzEwOTggNC45NjE4NiA5LjgzMTUyIDQuNjc2NjMgOS42OTQ5N0wxLjY0Mzk1IDguMjQzMjFWMTIuMDY1NEMxLjY0Mzk1IDEzLjAxNDEgMi40MTMwMiAxMy43ODMyIDMuMzYxNzEgMTMuNzgzMkgxMi42MzgzQzEzLjU4NyAxMy43ODMyIDE0LjM1NiAxMy4wMTQxIDE0LjM1NiAxMi4wNjU0VjguMjQzMjFMMTEuMzIzNCA5LjY5NDk3QzExLjAzODEgOS44MzE1MiAxMC42OTYyIDkuNzEwOTggMTAuNTU5NyA5LjQyNTc0QzEwLjQyMzEgOS4xNDA1MSAxMC41NDM3IDguNzk4NTkgMTAuODI4OSA4LjY2MjA1TDE0LjA3ODMgNy4xMDY1N0MxNC41NTI4IDYuODc5NCAxNC44NTQ4IDYuMzk5OTggMTQuODU0OCA1Ljg3Mzg1QzE0Ljg1NDggNS4xMTkwNSAxNC4yNDI5IDQuNTA3MTYgMTMuNDg4MSA0LjUwNzE2SDIuNTExODZaTTguODMyNiAzLjM2MTk5SDcuMTE0ODRWMi43ODk0QzcuMTE0ODQgMi40NzMxNyA3LjM3MTE5IDIuMjE2ODIgNy42ODc0MyAyLjIxNjgySDguMjYwMDFDOC41NzYyNCAyLjIxNjgyIDguODMyNiAyLjQ3MzE3IDguODMyNiAyLjc4OTRWMy4zNjE5OVpNNy42ODc0MyA5LjAwNTk0QzcuMzcxMTkgOS4wMDU5NCA3LjExNDg0IDkuMjYyMyA3LjExNDg0IDkuNTc4NTNWMTAuMTUxMUM3LjExNDg0IDEwLjQ2NzMgNy4zNzExOSAxMC43MjM3IDcuNjg3NDMgMTAuNzIzN0g4LjI2MDAxQzguNTc2MjQgMTAuNzIzNyA4LjgzMjYgMTAuNDY3MyA4LjgzMjYgMTAuMTUxMVY5LjU3ODUzQzguODMyNiA5LjI2MjMgOC41NzYyNCA5LjAwNTk0IDguMjYwMDEgOS4wMDU5NEg3LjY4NzQzWk01Ljk2OTY3IDkuNTc4NTNDNS45Njk2NyA4LjYyOTg0IDYuNzM4NzMgNy44NjA3NyA3LjY4NzQzIDcuODYwNzdIOC4yNjAwMUM5LjIwODcxIDcuODYwNzcgOS45Nzc3NyA4LjYyOTg0IDkuOTc3NzcgOS41Nzg1M1YxMC4xNTExQzkuOTc3NzcgMTEuMDk5OCA5LjIwODcxIDExLjg2ODkgOC4yNjAwMSAxMS44Njg5SDcuNjg3NDNDNi43Mzg3MyAxMS44Njg5IDUuOTY5NjcgMTEuMDk5OCA1Ljk2OTY3IDEwLjE1MTFWOS41Nzg1M1oiCiAgICBmaWxsPSJjdXJyZW50Q29sb3IiCiAgLz4KPC9zdmc+)
 *
 * @param {Object} props - Supabase icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
const Briefcase = createSupabaseIcon('Briefcase', [
  [
    'path',
    {
      'fill-rule': 'evenodd',
      'clip-rule': 'evenodd',
      d: 'M5.96967 2.7894C5.96967 1.84071 6.73873 1.07164 7.68743 1.07164H8.26001C9.20871 1.07164 9.97777 1.84071 9.97777 2.7894V3.36199H13.4881C14.8754 3.36199 16 4.48659 16 5.87385C16 6.42608 15.819 6.95031 15.5012 7.37618V12.0654C15.5012 13.6466 14.2194 14.9284 12.6383 14.9284H3.36171C1.78056 14.9284 0.498777 13.6466 0.498777 12.0654V7.37618C0.181033 6.95031 0 6.42608 0 5.87385C0 4.48659 1.1246 3.36199 2.51186 3.36199H5.96967V2.7894ZM2.51186 4.50716C1.75706 4.50716 1.14517 5.11905 1.14517 5.87385C1.14517 6.39998 1.44719 6.8794 1.92175 7.10657L5.17109 8.66205C5.45633 8.79859 5.57686 9.14051 5.44032 9.42574C5.30378 9.71098 4.96186 9.83152 4.67663 9.69497L1.64395 8.24321V12.0654C1.64395 13.0141 2.41302 13.7832 3.36171 13.7832H12.6383C13.587 13.7832 14.356 13.0141 14.356 12.0654V8.24321L11.3234 9.69497C11.0381 9.83152 10.6962 9.71098 10.5597 9.42574C10.4231 9.14051 10.5437 8.79859 10.8289 8.66205L14.0783 7.10657C14.5528 6.8794 14.8548 6.39998 14.8548 5.87385C14.8548 5.11905 14.2429 4.50716 13.4881 4.50716H2.51186ZM8.8326 3.36199H7.11484V2.7894C7.11484 2.47317 7.37119 2.21682 7.68743 2.21682H8.26001C8.57624 2.21682 8.8326 2.47317 8.8326 2.7894V3.36199ZM7.68743 9.00594C7.37119 9.00594 7.11484 9.2623 7.11484 9.57853V10.1511C7.11484 10.4673 7.37119 10.7237 7.68743 10.7237H8.26001C8.57624 10.7237 8.8326 10.4673 8.8326 10.1511V9.57853C8.8326 9.2623 8.57624 9.00594 8.26001 9.00594H7.68743ZM5.96967 9.57853C5.96967 8.62984 6.73873 7.86077 7.68743 7.86077H8.26001C9.20871 7.86077 9.97777 8.62984 9.97777 9.57853V10.1511C9.97777 11.0998 9.20871 11.8689 8.26001 11.8689H7.68743C6.73873 11.8689 5.96967 11.0998 5.96967 10.1511V9.57853Z',
      fill: 'currentColor',
      key: '1misct',
    },
  ],
]);

export default Briefcase;
