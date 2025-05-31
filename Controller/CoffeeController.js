import Menu from '../Models/Menu.js';

export async function getAllMenu() {
    try {
        const menus = await Menu.find();
        return menus;
    } catch(error) {
        console.log(error.message);
        return null;
    }
};

export async function deleteMenu(prodID) {
    try {
        const result = await Menu.findOneAndDelete({ prodID : prodID });
        return result;
    } catch(error) {
        console.log(error.message);
        return null;
    }
};