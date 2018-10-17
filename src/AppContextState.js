let state = {
    person: {
        firstName: 'Jane',
        lastName: 'Doe',
        age: 25
    },
    office: {
        streetAddress: '420 King St',
        city: 'Toronto',
        phone: '4161234567',
    }
};

const person = (state, propName, value) => {
    const person = {
        ...state.person,
        [propName]: value
    }

   return {person};
}

const office = (state, propName, value) => {
    const office = {
        ...state.office,
        [propName]: value
    }

    return {office};
}

export default {
    state,
    updaters: {
        person,
        office
    }
};