import { Switch } from '@headlessui/react';
import { useEffect, useState } from 'react';

const ThemeToggle = () => {
    const [enabled, setEnabled] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
            document.documentElement.classList.add('dark');
            setEnabled(true);
        } else {
            document.documentElement.classList.remove('dark');
            setEnabled(false);
        }
    }, []);

    const toggleTheme = (value: boolean) => {
        setEnabled(value);
        if (value) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    return (
        <div className="flex items-center space-x-2 text-sm font-medium">
      <span className={!enabled ? 'text-text-normal' : 'text-text-normal'}>
        LIGHT
      </span>

            <Switch
                checked={enabled}
                onChange={toggleTheme}
                className={`${
                    enabled ? 'bg-outline' : 'bg-outline'
                } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none`}
            >
        <span
            className={`${
                enabled ? 'translate-x-6' : 'translate-x-1'
            } inline-block h-4 w-4 transform rounded-full bg-primary transition-transform`}
        />
            </Switch>

            <span className={enabled ? 'text-text-normal' : 'text-text-normal'}>
        DARK
      </span>
        </div>
    );
};

export default ThemeToggle;