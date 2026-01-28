export function slugify(text) {
    return text
        .toString()
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '')
        .substring(0, 100);
}

export function generateMatchSlug(match) {
    const competition = match.competition || 'deportes';
    const title = match.match_title || match.title || 'partido';
    return slugify(`${competition}-${title}`);
}

export function formatDateTime(dateStr, timeStr) {
    try {
        const [day, month, year] = dateStr.split('/');
        const [hours, minutes] = timeStr.split(':');
        return new Date(year, month - 1, day, hours, minutes);
    } catch {
        return new Date();
    }
}

export function formatDisplayTime(dateStr, timeStr) {
    try {
        const date = formatDateTime(dateStr, timeStr);
        return date.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
    } catch {
        return timeStr || '00:00';
    }
}

export function isToday(dateStr) {
    try {
        const [day, month, year] = dateStr.split('/');
        const matchDate = new Date(year, month - 1, day);
        const today = new Date();
        return matchDate.toDateString() === today.toDateString();
    } catch {
        return false;
    }
}

export function groupMatchesByDate(matches) {
    const groups = {};
    matches.forEach(match => {
        const date = match.date || 'Sin fecha';
        if (!groups[date]) {
            groups[date] = [];
        }
        groups[date].push(match);
    });
    return groups;
}
