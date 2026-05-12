document.addEventListener('DOMContentLoaded', () => {
    // 1. Mouse Glow Effect
    document.addEventListener('mousemove', (e) => {
        document.documentElement.style.setProperty('--x', e.clientX + 'px');
        document.documentElement.style.setProperty('--y', e.clientY + 'px');
    });

    // 2. Terminal Auto-Typer (Fixed Logic)
    const termBody = document.getElementById('terminal-body');
    if (termBody) {
        const commands = [
            "> Initializing risk_engine.py",
            "[OK] Strategy: Mean Reversion",
            "[OK] Position Sizing: Kelly Criterion",
            "> Executing Backtest...",
            "[SUCCESS] Return: 7.16x | Sharpe: 2.45",
            "> Ready for new commands_"
        ];

        let i = 0;
        function type() {
            if (i < commands.length) {
                let p = document.createElement('div');
                p.className = 'success';
                p.innerHTML = commands[i];
                termBody.appendChild(p);
                i++;
                setTimeout(type, 800);
            }
        }
        type();
    }

    // 3. Scroll Reveal Animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.bento-item').forEach(item => {
        item.style.opacity = 0;
        item.style.transform = "translateY(40px)";
        item.style.transition = "all 0.8s ease-out";
        observer.observe(item);
    });
});
