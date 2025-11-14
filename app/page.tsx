import ThemeToggle from "./components/ThemeToggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-bg-primary font-body">
      <main className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Header */}
        <header className="mb-16">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-4xl font-bold text-text-primary font-heading mb-4">
                Semantic Theme Demo
              </h1>
              <p className="text-lg text-text-secondary">
                A comprehensive design system with semantic color and font tokens
              </p>
            </div>
            <div className="flex-shrink-0 ml-4">
              <ThemeToggle />
            </div>
          </div>
        </header>

        {/* Semantic Colors Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-text-primary font-heading mb-8">
            Semantic Colors
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Primary */}
            <div className="p-6 rounded-lg border border-border bg-bg-elevated">
              <h3 className="text-lg font-semibold text-text-primary mb-4 font-heading">
                Primary
              </h3>
              <div className="space-y-3">
                <div className="h-12 bg-primary rounded flex items-center justify-center text-text-inverse font-medium">
                  Primary
                </div>
                <div className="h-12 bg-primary-hover rounded flex items-center justify-center text-text-inverse font-medium">
                  Primary Hover
                </div>
                <div className="h-12 bg-primary-light rounded flex items-center justify-center text-text-primary font-medium">
                  Primary Light
                </div>
                <div className="h-12 bg-primary-dark rounded flex items-center justify-center text-text-inverse font-medium">
                  Primary Dark
                </div>
              </div>
            </div>

            {/* Secondary */}
            <div className="p-6 rounded-lg border border-border bg-bg-elevated">
              <h3 className="text-lg font-semibold text-text-primary mb-4 font-heading">
                Secondary
              </h3>
              <div className="space-y-3">
                <div className="h-12 bg-secondary rounded flex items-center justify-center text-text-inverse font-medium">
                  Secondary
                </div>
                <div className="h-12 bg-secondary-hover rounded flex items-center justify-center text-text-inverse font-medium">
                  Secondary Hover
                </div>
                <div className="h-12 bg-secondary-light rounded flex items-center justify-center text-text-primary font-medium">
                  Secondary Light
                </div>
                <div className="h-12 bg-secondary-dark rounded flex items-center justify-center text-text-inverse font-medium">
                  Secondary Dark
                </div>
              </div>
            </div>

            {/* Accent */}
            <div className="p-6 rounded-lg border border-border bg-bg-elevated">
              <h3 className="text-lg font-semibold text-text-primary mb-4 font-heading">
                Accent
              </h3>
              <div className="space-y-3">
                <div className="h-12 bg-accent rounded flex items-center justify-center text-text-inverse font-medium">
                  Accent
                </div>
                <div className="h-12 bg-accent-hover rounded flex items-center justify-center text-text-inverse font-medium">
                  Accent Hover
                </div>
                <div className="h-12 bg-accent-light rounded flex items-center justify-center text-text-primary font-medium">
                  Accent Light
                </div>
                <div className="h-12 bg-accent-dark rounded flex items-center justify-center text-text-inverse font-medium">
                  Accent Dark
                </div>
              </div>
            </div>

            {/* Success */}
            <div className="p-6 rounded-lg border border-border bg-bg-elevated">
              <h3 className="text-lg font-semibold text-text-primary mb-4 font-heading">
                Success
              </h3>
              <div className="space-y-3">
                <div className="h-12 bg-success rounded flex items-center justify-center text-text-inverse font-medium">
                  Success
                </div>
                <div className="h-12 bg-success-hover rounded flex items-center justify-center text-text-inverse font-medium">
                  Success Hover
                </div>
                <div className="h-12 bg-success-light rounded flex items-center justify-center text-text-primary font-medium">
                  Success Light
                </div>
                <div className="h-12 bg-success-dark rounded flex items-center justify-center text-text-inverse font-medium">
                  Success Dark
                </div>
              </div>
            </div>

            {/* Error */}
            <div className="p-6 rounded-lg border border-border bg-bg-elevated">
              <h3 className="text-lg font-semibold text-text-primary mb-4 font-heading">
                Error
              </h3>
              <div className="space-y-3">
                <div className="h-12 bg-error rounded flex items-center justify-center text-text-inverse font-medium">
                  Error
                </div>
                <div className="h-12 bg-error-hover rounded flex items-center justify-center text-text-inverse font-medium">
                  Error Hover
                </div>
                <div className="h-12 bg-error-light rounded flex items-center justify-center text-text-primary font-medium">
                  Error Light
                </div>
                <div className="h-12 bg-error-dark rounded flex items-center justify-center text-text-inverse font-medium">
                  Error Dark
                </div>
              </div>
            </div>

            {/* Warning */}
            <div className="p-6 rounded-lg border border-border bg-bg-elevated">
              <h3 className="text-lg font-semibold text-text-primary mb-4 font-heading">
                Warning
              </h3>
              <div className="space-y-3">
                <div className="h-12 bg-warning rounded flex items-center justify-center text-text-inverse font-medium">
                  Warning
                </div>
                <div className="h-12 bg-warning-hover rounded flex items-center justify-center text-text-inverse font-medium">
                  Warning Hover
                </div>
                <div className="h-12 bg-warning-light rounded flex items-center justify-center text-text-primary font-medium">
                  Warning Light
                </div>
                <div className="h-12 bg-warning-dark rounded flex items-center justify-center text-text-inverse font-medium">
                  Warning Dark
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="p-6 rounded-lg border border-border bg-bg-elevated">
              <h3 className="text-lg font-semibold text-text-primary mb-4 font-heading">
                Info
              </h3>
              <div className="space-y-3">
                <div className="h-12 bg-info rounded flex items-center justify-center text-text-inverse font-medium">
                  Info
                </div>
                <div className="h-12 bg-info-hover rounded flex items-center justify-center text-text-inverse font-medium">
                  Info Hover
                </div>
                <div className="h-12 bg-info-light rounded flex items-center justify-center text-text-primary font-medium">
                  Info Light
                </div>
                <div className="h-12 bg-info-dark rounded flex items-center justify-center text-text-inverse font-medium">
                  Info Dark
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Text Colors Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-text-primary font-heading mb-8">
            Text Colors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg border border-border bg-bg-elevated">
              <p className="text-text-primary text-lg mb-2">Primary Text</p>
              <p className="text-text-secondary text-lg mb-2">Secondary Text</p>
              <p className="text-text-muted text-lg mb-2">Muted Text</p>
              <p className="bg-primary text-text-inverse text-lg p-3 rounded">
                Inverse Text
              </p>
            </div>
          </div>
        </section>

        {/* Background Colors Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-text-primary font-heading mb-8">
            Background Colors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-lg border border-border bg-bg-primary">
              <p className="text-text-primary font-medium">Primary Background</p>
            </div>
            <div className="p-6 rounded-lg border border-border bg-bg-secondary">
              <p className="text-text-primary font-medium">Secondary Background</p>
            </div>
            <div className="p-6 rounded-lg border border-border bg-bg-muted">
              <p className="text-text-primary font-medium">Muted Background</p>
            </div>
            <div className="p-6 rounded-lg border border-border bg-bg-elevated">
              <p className="text-text-primary font-medium">Elevated Background</p>
            </div>
          </div>
        </section>

        {/* Font Families Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-text-primary font-heading mb-8">
            Font Families
          </h2>
          <div className="space-y-4">
            <div className="p-6 rounded-lg border border-border bg-bg-elevated">
              <h3 className="text-xl font-heading text-text-primary mb-2">
                Heading Font (Geist Sans)
              </h3>
              <p className="text-text-secondary">
                Used for headings and titles throughout the application
              </p>
            </div>
            <div className="p-6 rounded-lg border border-border bg-bg-elevated">
              <h3 className="text-xl font-body text-text-primary mb-2">
                Body Font (Geist Sans)
              </h3>
              <p className="text-text-secondary">
                Used for body text and general content
              </p>
            </div>
            <div className="p-6 rounded-lg border border-border bg-bg-elevated">
              <h3 className="text-xl font-mono text-text-primary mb-2">
                Mono Font (Geist Mono)
              </h3>
              <p className="text-text-secondary font-mono">
                Used for code blocks and monospaced content
              </p>
            </div>
          </div>
        </section>

        {/* Usage Examples */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-text-primary font-heading mb-8">
            Usage Examples
          </h2>
          <div className="space-y-6">
            <div className="p-6 rounded-lg border border-border bg-bg-elevated">
              <h3 className="text-lg font-semibold text-text-primary mb-4 font-heading">
                Buttons
              </h3>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-primary text-text-inverse rounded-lg hover:bg-primary-hover transition-colors font-medium">
                  Primary Button
                </button>
                <button className="px-6 py-3 bg-secondary text-text-inverse rounded-lg hover:bg-secondary-hover transition-colors font-medium">
                  Secondary Button
                </button>
                <button className="px-6 py-3 bg-success text-text-inverse rounded-lg hover:bg-success-hover transition-colors font-medium">
                  Success Button
                </button>
                <button className="px-6 py-3 bg-error text-text-inverse rounded-lg hover:bg-error-hover transition-colors font-medium">
                  Error Button
                </button>
              </div>
            </div>

            <div className="p-6 rounded-lg border border-border bg-bg-elevated">
              <h3 className="text-lg font-semibold text-text-primary mb-4 font-heading">
                Alerts
              </h3>
              <div className="space-y-3">
                <div className="p-4 bg-success-light border-l-4 border-success rounded text-text-primary">
                  <strong className="text-success">Success:</strong> This is a success message
                </div>
                <div className="p-4 bg-error-light border-l-4 border-error rounded text-text-primary">
                  <strong className="text-error">Error:</strong> This is an error message
                </div>
                <div className="p-4 bg-warning-light border-l-4 border-warning rounded text-text-primary">
                  <strong className="text-warning">Warning:</strong> This is a warning message
                </div>
                <div className="p-4 bg-info-light border-l-4 border-info rounded text-text-primary">
                  <strong className="text-info">Info:</strong> This is an info message
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
