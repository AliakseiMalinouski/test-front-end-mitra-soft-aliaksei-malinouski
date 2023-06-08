import { setLinks } from "./linkSlice";

export const linkThunk = (dispatch) => {
    fetch("https://gist.githubusercontent.com/AliakseiMalinouski/d34dca2bab79ce3f60614c45a4cc7534/raw/d1611e8d6a0160387e3aff2193f486e91c208d0b/MitraSoftTestLinks")
    .then(r => r.ok ? r.json() : alert('Error with download'))
    .then(d => dispatch(setLinks(d)))
    .catch(e => alert(`${e}`))
}