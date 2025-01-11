export default function FutureGoalsPage() {
    return (
        <div className="bg-background min-h-screen py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold">Future Goals</h1>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Our roadmap for sustainable energy innovation
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Short-term Goals */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold">Short-term Goals (2024-2025)</h2>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="bg-primary/10 text-primary rounded-full p-2 mr-4">1</span>
                                <div>
                                    <h3 className="font-semibold">Expand Market Presence</h3>
                                    <p className="text-muted-foreground">
                                        Establish operations in 10 new cities across India
                                    </p>
                                </div>
                            </li>
                            {/* Add more short-term goals */}
                        </ul>
                    </div>

                    {/* Long-term Goals */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold">Long-term Vision (2025-2030)</h2>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="bg-primary/10 text-primary rounded-full p-2 mr-4">1</span>
                                <div>
                                    <h3 className="font-semibold">Carbon Neutral Communities</h3>
                                    <p className="text-muted-foreground">
                                        Develop and implement complete solar solutions for 100 communities
                                    </p>
                                </div>
                            </li>
                            {/* Add more long-term goals */}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}