/* If press and hold tab, should only tab once. This is a project requirement. */
export function throttleTabbing() {
    let eligibleForTab = true;

    const handleKeyDown = e => {
        if (e.key === 'Tab' || e.keyCode === 9) {
            if (eligibleForTab) {
                eligibleForTab = false;
            } else {
                e.preventDefault();
            }
        }
    };

    const handleKeyUp = e => {
        if ((e.key === 'Tab' || e.keyCode === 9) && !eligibleForTab) {
            eligibleForTab = true;
        }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);
}

/* If press and hold up and down arrow keys in select menu, should move only once. This is a project requirement. */
export function throttleSelectUpAndDown() {
    let upEligibleForTab = true;
    let downEligibleForTab = true;

    const handleKeyDown = e => {
        if (document.activeElement.type === 'select-one') {
            /* up arrow: */
            if (e.key === 'ArrowUp' || e.keyCode === 38) {
                if (upEligibleForTab) {
                    upEligibleForTab = false;
                } else {
                    e.preventDefault();
                }
            }
            /* down arrow: */
            if (e.key === 'ArrowDown' || e.keyCode === 40) {
                if (downEligibleForTab) {
                    downEligibleForTab = false;
                } else {
                    e.preventDefault();
                }
            }
        }
    };

    const handleKeyUp = e => {
        if (document.activeElement.type === 'select-one') {
            if ((e.key === 'ArrowUp' || e.keyCode === 38) && !upEligibleForTab) {
                upEligibleForTab = true;
            }
            if ((e.key === 'ArrowDown' || e.keyCode === 40) && !downEligibleForTab) {
                downEligibleForTab = true;
            }
        }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
}