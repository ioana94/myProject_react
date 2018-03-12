const initialState = {
    error: null,
    jobsList: [],
    jobDetails: null,
    openApply: false,
    userJobApplications: [],
    usersWhoApplied: [],
    hasApplied: null,
    allSkills:[],

    jobApplied: null,

    requirements: [],
    benefits: [],
    skills: [],

    hideRequirementsEdit: true,
    hideBenefitsEdit: true,
    hideSkillsEdit: true,

    openAddJob: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_JOBS_SUCCESS':
            console.log('Am ajuns in jobs Reducer SUCCESS', action);
            return { ...state, jobsList: action.payload };
        case 'GET_JOBS_ERROR':
            console.log('Am ajuns in jobs Reducer ERROR', action);
            return { ...state, error: action.error };

        case 'GET_JOBS_DETAILS_SUCCESS':
            console.log('Am ajuns in jobsDetails Reducer SUCCESS', action);
            return { ...state, jobDetails: action.payload };
        case 'GET_JOBS_DETAILS_ERROR':
            console.log('Am ajuns in jobsDetails Reducer ERROR', action);
            return { ...state, error: action.error };

        // case 'CREATE_JOB_SUCCESS':
        //     return {...state};
        case 'CREATE_JOB_ERROR':
            console.log(action.error);
            return {...state, error:action.error};



        case 'GET_USER_JOB_APP_SUCCESS':
            console.log('Am ajuns in jobsDetails Reducer SUCCESS', action);
            return { ...state, userJobApplications: action.payload, hasApplied: action.ok};
        case 'GET_USER_JOB_APP_ERROR':
            console.log('Am ajuns in jobsDetails Reducer ERROR', action);
            return { ...state, error: action.error };
        case 'GET_WHO_APPLIED_SUCCESS':
            return { ...state, usersWhoApplied: action.payload};
        case 'GET_WHO_APPLIED_ERROR':
            return { ...state, error: action.error };
        case 'GET_ALL_SKILLS_SUCCESS':
            return {...state, allSkills: action.payload};
        case 'GET_ALL_SKILLS_ERROR':
            return {...state, error: action.error};


        case 'OPEN_APPLY':
            console.log('Am deschis form de app SUCCESS', action);
            return { ...state, openApply: true };
        case 'EXIT_APPLY':
            return { ...state, openApply: false };
        case 'APPLY_SUCCESS':
            console.log('am aplicat cu success SUCCESS', action);
            return { ...state, openApply: false, jobApplied: action.payload};
        case 'APPLY_ERROR':
            console.log('Am ajuns in reducer ERROR', action);
            return { ...state, error: action.error };

        case 'GET_REQUIREMENTS_SUCCESS':
            return {...state, requirements: action.payload};
        case 'GET_REQUIREMENTS_ERROR':
            return {...state, error: action.error};
        case 'GET_BENEFITS_SUCCESS':
            return {...state, benefits: action.payload};
        case 'GET_BENEFITS_ERROR':
            return {...state, error: action.error};
        case 'GET_SKILLS_SUCCESS':
            return {...state, skills: action.payload};
        case 'GET_SKILLS_ERROR':
            return {...state, error: action.error};

        case 'OPEN_REQUIREMENTS_EDIT':
            return {...state, hideRequirementsEdit: false};
        case 'CLOSE_REQUIREMENTS_EDIT':
            return {...state, hideRequirementsEdit: true};
        case 'ADD_REQ_SUCCESS':
            return {...state};
        case 'ADD_REQ_ERROR':
            return {...state, error: action.error};
        case 'DELETE_REQ_SUCCESS':
            return {...state};
        case 'DELETE_REQ_ERROR':
            return {...state, error: action.error};

        case 'OPEN_BENEFITS_EDIT':
            return {...state, hideBenefitsEdit: false};
        case 'CLOSE_BENEFITS_EDIT':
            return {...state, hideBenefitsEdit: true};
        case 'ADD_BNF_SUCCESS':
            return {...state};
        case 'ADD_BNF_ERROR':
            return {...state, error: action.error};
        case 'DELETE_BNF_SUCCESS':
            return {...state};
        case 'DELETE_BNF_ERROR':
            return {...state, error: action.error};

        case 'OPEN_SKILLS_EDIT':
            return {...state, hideSkillsEdit: false};
        case 'CLOSE_SKILLS_EDIT':
            return {...state, hideSkillsEdit: true};
        case 'ADD_SKL_SUCCESS':
            return {...state};
        case 'ADD_SKL_ERROR':
            return {...state, error: action.error};
        case 'DELETE_SKL_SUCCESS':
            return {...state};
        case 'DELETE_SKL_ERROR':
            return {...state, error: action.error};


        case 'OPEN_ADD_JOB':
            return { ...state, openAddJob: true };
        case 'CLOSE_ADD_JOB':
            return { ...state, openAddJob: false };
        default:
            return state;
    }
};
export default reducer;