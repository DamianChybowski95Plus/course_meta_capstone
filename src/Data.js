import { loremIpsum } from "lorem-ipsum"

export const MainDescription = {
    title : "Little Lemon",
    location : "Chicago",
    description : loremIpsum()
}

export const NavigationLinks = [ 
    {
        path : "/",
        name : "Home",
        element : "MainLayout"
    },
    {
        path : "/about",
        name : "About",
        element : "About"
    },
    {
        path : "/menu",
        name : "Menu",
        element : "Menu"
    },
    {
        path : "/reservations",
        name : "Reservations",
        element : "Reservations"
    },
    {
        path : "/orderOnline",
        name : "Order Online",
        element : "Orders"
    },
    {
        path : "/login",
        name : "Login",
        element : "Login"
    }
]

export const Contacts = {
    Adres : "12 er Chicago",
    "Phone Number" : 111111111,
    Email : "email@gmail.com"
}

export const SocialMedia = [
    { platform : "Facebook", link : "Link" },
    { platform : "x", link : "Link" },
    { platform : "Instagram", link : "Link" }
]

export const Menu = [
    {
        
    }
]