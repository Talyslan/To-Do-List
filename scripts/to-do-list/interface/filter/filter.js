import { filterSelect } from "../variables.js";

const all = () => {};
const checks = () => {};
const pendents = () => {};

const filter = () => {
    const filterValue = filterSelect.value;
    console.log(filterValue)

    switch(filterValue) {
        case "all": all();
            break;
        case "checks": checks();
            break;
        case "pendents": pendents(); 
            break;
    };

};

export { filter };