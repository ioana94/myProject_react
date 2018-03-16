const initialState = {
    contact: [],
    moreContactInfos: [],
    skills: [],
    workExperience: [],
    education: [],
    appliedJobs: [],

    error: null,

    hideEdit: false,
    openAddSkill: false,
    openAddWExp: false,
    openAddEducation: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_USER_CONTACT_SUCCESS':
            return {...state, contact: action.payload, moreContactInfos: action.value};
        case 'GET_USER_CONTACT_ERROR':
            return {...state, error: action.error};

        case 'GET_USER_SKILLS_SUCCESS':
            return {...state, skills: action.payload};
        case 'GET_USER_SKILLS_ERROR':
            return {...state, error: action.error};

        case 'GET_USER_WEXP_SUCCESS':
            return {...state, workExperience: action.payload};
        case 'GET_USER_WEXP_ERROR':
            return {...state, error: action.error};

        case 'GET_USER_EDUCATION_SUCCESS':
            return {...state, education: action.payload};
        case 'GET_USER_EDUCATION_ERROR':
            return {...state, error: action.error};

        case 'GET_USER_APPLIED_JOBS_SUCCESS':
            return {...state, appliedJobs: action.payload};
        case 'GET_USER_APPLIED_JOBS_ERROR':
            return {...state, error: action.error};

        case 'OPEN_EDIT':
            return {...state, hideEdit: true};
        case 'CLOSE_EDIT':
            return {...state, hideEdit: false};

        // case 'OPEN_ADD_SKILL':
        //     return {...state, openAddSkill: true};
        // case 'CLOSE_ADD_SKILL':
        //     return {...state, openAddSkill: false};
        //
        // case 'OPEN_ADD_WEXP':
        //     return {...state, openAddWExp: true};
        // case 'CLOSE_ADD_WEXP':
        //     return {...state, openAddWExp: false};
        //
        // case 'OPEN_ADD_EDUCATION':
        //     return {...state, openAddEducation: true};
        // case 'CLOSE_ADD_EDUCATION':
        //     return {...state, openAddEducation: false};

        case 'SAVE_EDIT_DETAILS_ERROR':
            console.log(action.error);
            return {...state, error: action.error};

        default:
            return state;
    }
};
export default reducer;