import http from '../Config/http';
import {push} from 'react-router-redux';
import * as companyUserActions from "./companyUserActions";

// ================== LIST ACTIONS ==========================
export const getJobs = () => {
    return (dispatch) => {
        http.get(`/jobs`)
            .then ((response) => dispatch(onGetSuccess(response.data)))
            .catch((error) => dispatch(onGetFailure(error)));
    };
};

export const onGetSuccess = (payload) => {
    return { type: 'GET_JOBS_SUCCESS', payload };
};

export const onGetFailure = (error) => {
    return { type: 'GET_JOBS_ERROR', error };
};

// // ================== CREATE ACTIONS ==========================

export const openAddJob = () => {
    return {type: 'OPEN_ADD_JOB'};
};

export const closeAddJob = () => {
    return {type: 'CLOSE_ADD_JOB'};
};



// export const createJob = (job) => {
//     return (dispatch) => {
//         http.post(`/jobs`, job)
//             .then ((response) => dispatch(onGetSuccess(response.data)))
//             .catch((error) => dispatch(onGetFailure(error)));
//     };
// };
//
//
export const createJob = (job) => {
    return async (dispatch) => {
        try {
           const response = await http.post(`/jobs`, job);

           if (job.jobBenefitInfoList) {
               const jobId = response.data.id;
               for (let i = 0; i < job.jobBenefitInfoList.length; i++ ) {
                   const benefit = job.jobBenefitInfoList[i];
                   benefit.jobId = jobId;

                   await http.post('/jobbenefits', benefit);
               }
           }
            if (job.jobRequirementInfoList) {
                const jobId = response.data.id;
                for (let i = 0; i < job.jobRequirementInfoList.length; i++ ) {
                    const requirem = job.jobRequirementInfoList[i];
                    requirem.jobId = jobId;

                    await http.post('/jobrequirements', requirem);
                }
            }

           //dispatch(onCreateJobSuccess(response.data));
           dispatch(getJobs());
           dispatch(companyUserActions.getJobsList(job.companyId));
        }
        catch (error) {
            dispatch(onCreateJobtFailure(error));
        }
    };
};

// export const onCreateJobSuccess = (payload) => {
//     return { type: 'CREATE_JOB_SUCCESS', payload };
// };

export const onCreateJobtFailure = (error) => {
    return { type: 'CREATE_JOB_ERROR', error };
};


// ================== CHANGE PAGE ACTIONS ==========================

export const onChangePage = (value, id) => {
    return (dispatch) => {
        dispatch(push(`/job/${value}`));
        localStorage.setItem('COMPANY_ID', id);
        localStorage.setItem('JOB_ID', value)

    };
};

// ================== GET DETAILS ACTIONS ==========================
export const getJobsDetails = (value) => {
    return (dispatch) => {
        http.get(`/jobs/${value}`)
            .then ((response) => dispatch(onGetDetailsSuccess(response.data)))
            .catch((error) => dispatch(onGeDetailstFailure(error)));
    };
};

export const onGetDetailsSuccess = (payload) => {
    return { type: 'GET_JOBS_DETAILS_SUCCESS', payload };
};

export const onGeDetailstFailure = (error) => {
    return { type: 'GET_JOBS_DETAILS_ERROR', error };
};

export const getUserJobApplication = (value, id) => {
    return (dispatch) => {
        http.get(`/userjobapplications/user/${value}`)
            .then ((response) => {
                let ok = false;
                for(let i=0; i<response.data.length; i++){
                    if(response.data[i].jobId == id) ok=true;
                }
                dispatch(onGetUserJobAppSuccess(response.data, ok))
            })
            .catch((error) => dispatch(onGetUserJobAppFailure(error)));
    };
};
export const onGetUserJobAppSuccess = (payload, ok) => {
    return { type: 'GET_USER_JOB_APP_SUCCESS', payload, ok };
};

export const onGetUserJobAppFailure = (error) => {
    return { type: 'GET_USER_JOB_APP_ERROR', error };
}

export const getUsersWhoApplied = (value) => {
    return (dispatch) => {
        http.get(`/userjobapplications/job/${value}`)
            .then ((response) => {
                dispatch(onGetUsersWhoAppliedSuccess(response.data))
            })
            .catch((error) => dispatch(onGetUsersWhoAppliedFailure(error)));
    };
};
export const onGetUsersWhoAppliedSuccess = (payload) => {
    return { type: 'GET_WHO_APPLIED_SUCCESS', payload };
};

export const onGetUsersWhoAppliedFailure = (error) => {
    return { type: 'GET_WHO_APPLIED_ERROR', error };
}


export const getAllSkills = () => {
    return (dispatch) => {
        http.get(`/skills`)
            .then ((response) => {
                dispatch(onGetAllSkillsSuccess(response.data))
            })
            .catch((error) => dispatch(onGetAllSkillsFailure(error)));
    };
};
export const onGetAllSkillsSuccess = (payload) => {
    return { type: 'GET_ALL_SKILLS_SUCCESS', payload };
};

export const onGetAllSkillsFailure = (error) => {
    return { type: 'GET_ALL_SKILLS_ERROR', error };
}

// =============== GET REQUIREMENTS BENEFITS SKILLS ACTIONS ============================

export const getRequirements = (id) => {
    return (dispatch) => {
        http.get(`/jobrequirements/job/${id}`)
            .then ((response) => dispatch(onGetRequirementsSuccess(response.data)))
            .catch((error) => dispatch(onGetRequirementsFailure(error)));
    };
};

export const onGetRequirementsSuccess = (payload) => {
    return { type: 'GET_REQUIREMENTS_SUCCESS', payload};
};

export const onGetRequirementsFailure = (error) => {
    return { type: 'GET_REQUIREMENTS_ERROR', error };
}

export const getBenefits = (id) => {
    return (dispatch) => {
        http.get(`/jobbenefits/job/${id}`)
            .then ((response) => dispatch(onGetBenefitsSuccess(response.data)))
            .catch((error) => dispatch(onGetBenefitsFailure(error)));
    };
};

export const onGetBenefitsSuccess = (payload) => {
    return { type: 'GET_BENEFITS_SUCCESS', payload};
};

export const onGetBenefitsFailure = (error) => {
    return { type: 'GET_BENEFITS_ERROR', error };
}

export const getSkills = (id) => {
    return (dispatch) => {
        http.get(`/jobskills/job/${id}}`)
            .then ((response) => dispatch(onGetSkillsSuccess(response.data)))
            .catch((error) => dispatch(onGetSkillsFailure(error)));
    };
};

export const onGetSkillsSuccess = (payload) => {
    return { type: 'GET_SKILLS_SUCCESS', payload};
};

export const onGetSkillsFailure = (error) => {
    return { type: 'GET_SKILLS_ERROR', error };
}

// =============== CRUD REQUIREMENTS============================
export const onOpenEditRequirements = () => {
    return { type: 'OPEN_REQUIREMENTS_EDIT' };
}
export const onCloseEditRequirements = () => {
    return { type: 'CLOSE_REQUIREMENTS_EDIT' };
}

export const onAddRequirement = (value) => {
    return (dispatch) => {
        http.post(`/jobrequirements`, value)
            .then ((response) => {
                dispatch(onAddRequirementSuccess());
                dispatch(getRequirements(response.data.jobId));

            })
            .catch((error) => dispatch(onAddRequirementFailure(error)));
    };
}

export const onAddRequirementSuccess = () => {
    return { type: 'ADD_REQ_SUCCESS'};
};

export const onAddRequirementFailure = (error) => {
    return { type: 'ADD_REQ_ERROR', error };
}

export const onDeleteRequirement = (value) => {
    return (dispatch) => {
        http.delete(`/jobrequirements/${value}`)
            .then ((response) => {
                dispatch(onDeleteRequirementSuccess());
                dispatch(getRequirements(localStorage.getItem('JOB_ID')));

            })
            .catch((error) => dispatch(onDeleteRequirementFailure(error)));
    };
}

export const onDeleteRequirementSuccess = () => {
    return { type: 'DELETE_REQ_SUCCESS'};
};

export const onDeleteRequirementFailure = (error) => {
    return { type: 'DELETE_REQ_ERROR', error };
}

// =============== CRUD BENEEFITS============================
export const onOpenEditBenefits = () => {
    return { type: 'OPEN_BENEFITS_EDIT' };
}
export const onCloseEditBenefits = () => {
    return { type: 'CLOSE_BENEFITS_EDIT' };
}

export const onAddBenefit = (value) => {
    return (dispatch) => {
        http.post(`/jobbenefits`, value)
            .then ((response) => {
                dispatch(onAddBenefitSuccess());
                dispatch(getBenefits(response.data.jobId));

            })
            .catch((error) => dispatch(onAddBenefitFailure(error)));
    };
}

export const onAddBenefitSuccess = () => {
    return { type: 'ADD_BNF_SUCCESS'};
};

export const onAddBenefitFailure = (error) => {
    return { type: 'ADD_RNF_ERROR', error };
}

export const onDeleteBenefit = (value) => {
    return (dispatch) => {
        http.delete(`/jobbenefits/${value}`)
            .then ((response) => {
                dispatch(onDeleteBenefitSuccess());
                dispatch(getBenefits(localStorage.getItem('JOB_ID')));

            })
            .catch((error) => dispatch(onDeleteBenefitFailure(error)));
    };
}

export const onDeleteBenefitSuccess = () => {
    return { type: 'DELETE_BNF_SUCCESS'};
};

export const onDeleteBenefitFailure = (error) => {
    return { type: 'DELETE_BNF_ERROR', error };
}


// =============== CRUD SKILLS============================
export const onOpenEditSkills = () => {
    return { type: 'OPEN_SKILLS_EDIT' };
}
export const onCloseEditSkills = () => {
    return { type: 'CLOSE_SKILLS_EDIT' };
}

export const onAddSkill = (value) => {
    return (dispatch) => {
        http.post(`/jobskills`, value)
            .then ((response) => {
                dispatch(onAddSkillSuccess());
                dispatch(getSkills(response.data.jobId));

            })
            .catch((error) => dispatch(onAddSkillFailure(error)));
    };
}

export const onAddSkillSuccess = () => {
    return { type: 'ADD_SKL_SUCCESS'};
};

export const onAddSkillFailure = (error) => {
    return { type: 'ADD_SKL_ERROR', error };
}

export const onDeleteSkill = (value) => {
    return (dispatch) => {
        http.delete(`/jobskills/${value}`)
            .then ((response) => {
                dispatch(onDeleteSkillSuccess());
                dispatch(getSkills(localStorage.getItem('JOB_ID')));

            })
            .catch((error) => dispatch(onDeleteSkillFailure(error)));
    };
}

export const onDeleteSkillSuccess = () => {
    return { type: 'DELETE_SKL_SUCCESS'};
};

export const onDeleteSkillFailure = (error) => {
    return { type: 'DELETE_SKL_ERROR', error };
}


// ================== APPLY ACTIONS ==========================

export const onOpenApply = () => {
    return { type: 'OPEN_APPLY' };
}
export const onExitApply = () => {
    return { type: 'EXIT_APPLY' };
}
export const onApply = (value) => {
    return (dispatch) => {
        http.post(`/userjobapplications`, value)
            .then ((response) => {
                dispatch(onApplySuccess(response.data));
                dispatch(getUserJobApplication(response.data.userId, response.data.jobId));

            })
            .catch((error) => dispatch(onApplyFailure(error)));
    };
};

export const onApplySuccess = (payload) => {
    return { type: 'APPLY_SUCCESS', payload };
};

export const onApplyFailure = (error) => {
    return { type: 'APPLY_ERROR', error };

}



