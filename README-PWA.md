# CADCraft installable PWA

Deploy: https://cptnope.github.io/cadcraft/

- Dedicated narrow-screen shell, with Canvas, Tools, Layers, Properties and Command tabs. Normal desktop layout is unaffected.
- Web deployment builds only the `cadcraft-web` WASM app with Trunk and checks packaging. No full-workspace test suite is run in the deploy action.
- Desktop release, FreeBSD, Nix, Windows ARM64, and packaging lint actions are preserved as manual-only workflows. Tests are retained in source control.
- Service worker caches app assets only, not drawings; export and back up your work.
- WebGPU/WebGL2 supported where the browser permits; query `?webgl` or `?cpu` as fallbacks.
