
interface serviceProps {
    id: number;
    title: string;
    icon: string;
    subtitle: string;
}

interface menu {
    id: number;
    name: string;
}

export const menu: menu[] = [
    {id: 1, name: "Home"},
    {id: 2, name: "About"}
];

export const serviceA: serviceProps[] = [
    {
        id: 1,
        icon: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=1000&auto=format&fit=crop",
        title: "Finloop Finance App",
        subtitle: "Mobile App - Finance - UI/UX Design"
    },
    {
        id: 2,
        icon: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1000&auto=format&fit=crop",
        title: "Finora Finance Dashboard", 
        subtitle: "Dashboard - Finance - UI/UX Design"
    },
    {
        id: 3,
        icon: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?q=80&w=1000&auto=format&fit=crop",
        title: "Revolux Green Energy Website",
        subtitle: "Landing Page - Corporate - UI/UX Design"
    }
]

export const serviceB: serviceProps[] = []