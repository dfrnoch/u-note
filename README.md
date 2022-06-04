# uNote

uNote is a free and open source note taking app that is fast, simple and reliable. It is built on top of the [Tauri](https://tauri.studio/) framework and uses [React](https://reactjs.org/) for the frontend and [Rust](https://www.rust-lang.org/) for the backend. 

uNote is designed to be easy to use and easy to get started with. It has a minimalistic user interface that is fast and responsive. You can easily create, edit and delete notes and there is also a sorting and filtering system so you can keep your notes organized. 

uNote is a cross-platform app and it runs on Windows, macOS and Linux.

## How to download?

You can find the latest release of uNote [here](https://github.com/lnxcz/u-note/releases). Just download the binary for your platform and run it.


## Compiling from source

If you want to compile uNote from source, you will need [Node.js](https://nodejs.org/) and [Rust](https://www.rust-lang.org/) installed on your machine. Then, clone this repository and run the following commands:

```
cd uNote
npm install
npm run tauri build
```
This will build the app and the binaries will be placed in the `tauri-src/target/release` folder.


## Contributing

If you want to contribute to uNote, feel free to open a Pull Request or an Issue on GitHub.

## License

uNote is released under the MIT license.
