import {useState, type FormEvent, useEffect} from "react";
import { ExternalLink } from "lucide-react";

function NewsletterPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

    const [focused, setFocused] = useState<{ name: boolean; email: boolean }>({
        name: false,
        email: false,
    });


    const validate = (): boolean => {
        const newErrors: { name?: string; email?: string } = {};
        if (!name.trim()) {
            newErrors.name = "Bitte geben Sie Ihren Namen ein.";
        }
        if (!email.trim()) {
            newErrors.email = "Bitte geben Sie Ihre E-Mail-Adresse ein.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: FormEvent): void => {
        e.preventDefault();
        if (validate()) {
            const nameWithoutSpaces = name.replace(/\s/g, '');
            const encodedName = encodeURIComponent(nameWithoutSpaces);
            const encodedEmail = encodeURIComponent(email);
            const rptuUrl = `https://lists.rptu.de/wws/subscribe/cs-aal-zweig?previous_action=info&email=${encodedEmail}&realname=${encodedName}`;

            window.open(
                rptuUrl,
                "_blank",
                "noopener,noreferrer"
            );
        }
    };

    const getEmailInputClass = () => {
        const baseClass = "w-full rounded-lg border px-4 py-2 focus:outline-none text-primary placeholder:text-text-normal/50 transition-colors";
        if (errors.email) {
            return `${baseClass} ${focused.email ? 'border-error-container-selected' : 'border-error-container'}`;
        }
        return `${baseClass} ${focused.email ? 'border-primary-container-selected' : 'border-primary-container'}`;
    };

    const getNameInputClass = () => {
        const baseClass = "w-full rounded-lg border px-4 py-2 focus:outline-none text-primary placeholder:text-text-normal/50 transition-colors";
        if (errors.name) {
            return `${baseClass} ${focused.name ? 'border-error-container-selected' : 'border-error-container'}`;
        }
        return `${baseClass} ${focused.name ? 'border-primary-container-selected' : 'border-primary-container'}`;
    };


    return (
        <div className="min-h-screen px-6 py-8">
            <div className="max-w-2xl mx-auto text-center">
                <h1 className="text-5xl font-bold text-primary mb-6">
                    Newsletter
                </h1>
                <p className="text-lg text-primary mb-8">
                    Bleiben Sie auf dem Laufenden! Abonnieren Sie den Newsletter von Prof. Zweig, um Informationen und spannende Updates direkt per E-Mail zu erhalten.
                </p>

                <form
                    onSubmit={handleSubmit}
                    noValidate
                    className="space-y-6 text-left bg-primary-container/20 p-6 rounded-2xl shadow-md"
                >
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-base font-medium text-primary mb-1"
                        >
                            E-Mail-Adresse
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                if (errors.email) {
                                    const newErrors = { ...errors };
                                    delete newErrors.email;
                                    setErrors(newErrors);
                                }
                            }}
                            onFocus={() => setFocused({ ...focused, email: true })}
                            onBlur={() => setFocused({ ...focused, email: false })}
                            className={getEmailInputClass()}
                            placeholder="Ihre E-Mail-Adresse"
                        />
                        {errors.email && (
                            <p className="text-sm text-error-container mt-1">
                                {errors.email}
                            </p>
                        )}
                    </div>

                    <div>
                        <label
                            htmlFor="name"
                            className="block text-base font-medium text-primary mb-1"
                        >
                            Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                                if (errors.name) {
                                    const newErrors = { ...errors };
                                    delete newErrors.name;
                                    setErrors(newErrors);
                                }
                            }}
                            onFocus={() => setFocused({ ...focused, name: true })}
                            onBlur={() => setFocused({ ...focused, name: false })}
                            className={getNameInputClass()}
                            placeholder="Ihr Name"
                        />
                        {errors.name && (
                            <p className="text-sm text-error-container mt-1">
                                {errors.name}
                            </p>
                        )}
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center px-6 py-3 rounded-2xl font-semibold text-lg
                                   bg-primary-container text-on-primary-container hover:bg-primary-container-selected hover:text-on-primary-container-selected
                                   transition-colors shadow-md"
                    >
                        Zum Abonnieren
                        <ExternalLink className="ml-2 w-5 h-5" />
                    </button>
                </form>

                <p className="mt-6 text-sm text-text-normal">
                    Sie werden nach dem Absenden zum offiziellen Mailservice der RPTU weitergeleitet. Dort müssen Sie Ihre Anmeldung bestätigen, um den Newsletter zu erhalten.
                </p>

                <p className="mt-6 text-sm text-text-normal">
                    Falls Sie sich manuell auf der Mailservice-Seite der RPTU zum Newsletter anmelden möchten, klicken Sie <strong><a href="https://lists.rptu.de/wws/subscribe/cs-aal-zweig?previous_action=signoff" className="text-primary">hier</a></strong>.
                </p>

            </div>
        </div>
    );
}

export default NewsletterPage;