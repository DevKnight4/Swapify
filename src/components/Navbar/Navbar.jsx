import { Link, useLocation } from "react-router-dom";
import { Users, Search, MessageCircle, User, Shield, Menu, X } from "lucide-react";
import { useState } from "react";
import Button from "../ui/Button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/Avatar";

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const location = useLocation();

    const navigationItems = [
        { id: '/', label: 'Home', icon: Users },
        { id: '/browse-skills', label: 'Browse Skills', icon: Search },
        { id: '/my-swaps', label: 'My Swaps', icon: MessageCircle },
        { id: '/profile', label: 'Profile', icon: User },
    ];

    const toggleAdminMode = () => {
        setIsAdmin(!isAdmin);
        setMobileMenuOpen(false);
    };

    return (


        <header className="bg-card border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-card/95">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow">
                            <Users className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-gradient-primary">Swappify</h1>
                            <p className="text-xs text-muted-foreground font-medium">Fusion Exchange</p>
                        </div>
                    </div>

                    <nav className="hidden md:flex items-center space-x-1">
                        {navigationItems.map((item) => (
                            <Link to={item.id} key={item.id}>
                                <Button
                                    variant={location.pathname === item.id ? "default" : "ghost"}
                                    className={`flex items-center gap-2 transition-all ${location.pathname === item.id
                                        ? "bg-gradient-primary text-white shadow-primary"
                                        : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                                        }`}
                                >
                                    <item.icon className="w-4 h-4" />
                                    {item.label}
                                </Button>
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center gap-3">
                        <Button
                            variant={isAdmin ? "default" : "outline"}
                            size="sm"
                            onClick={toggleAdminMode}
                            className="hidden md:flex items-center gap-2 transition-all"
                        >
                            <Shield className="w-4 h-4" />
                            {isAdmin ? 'Admin Mode' : 'User Mode'}
                        </Button>

                        <Avatar className="w-8 h-8 cursor-pointer animate-glow">
                            <AvatarImage src="/placeholder.svg" alt="User" />
                            <AvatarFallback className="bg-gradient-primary text-white text-sm font-medium">SF</AvatarFallback>
                        </Avatar>

                        <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </Button>
                    </div>
                </div>

                <div className="p-4 m-4 bg-red-500 text-white text-lg">
                    Tailwind is working ✅
                </div>


                {mobileMenuOpen && (
                    <div className="md:hidden py-4 border-t border-border bg-card/80 backdrop-blur-sm">
                        <nav className="flex flex-col space-y-2">
                            {navigationItems.map((item) => (
                                <Link to={item.id} key={item.id} onClick={() => setMobileMenuOpen(false)}>
                                    <Button
                                        variant={location.pathname === item.id ? "default" : "ghost"}
                                        className="justify-start"
                                    >
                                        <item.icon className="w-4 h-4 mr-2" />
                                        {item.label}
                                    </Button>
                                </Link>
                            ))}

                            <Button
                                variant={isAdmin ? "default" : "ghost"}
                                className="justify-start"
                                onClick={toggleAdminMode}
                            >
                                <Shield className="w-4 h-4 mr-2" />
                                {isAdmin ? 'Exit Admin' : 'Admin Mode'}
                            </Button>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Navbar;
