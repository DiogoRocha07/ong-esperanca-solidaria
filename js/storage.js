const STORAGE_KEY = "voluntarios";

export function getSavedVolunteers() {
    const savedData =
        localStorage.getItem(STORAGE_KEY);

    if (!savedData) {
        return [];
    }

    try {
        return JSON.parse(savedData);
    } catch (error) {
        console.error(
            "Erro ao recuperar dados:",
            error
        );

        return [];
    }
}

export function saveVolunteer(volunteer) {
    const volunteers =
        getSavedVolunteers();

    volunteers.push(volunteer);

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(volunteers)
    );
}

export function deleteVolunteer(index) {
    const volunteers =
        getSavedVolunteers();

    volunteers.splice(index, 1);

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(volunteers)
    );
}