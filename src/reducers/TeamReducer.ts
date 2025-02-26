export const TeamInitialState = {
  teamMembers: [],
};

interface TeamState {
  teamMembers: string[];
}

type TeamAction =
  | { type: "ADD_TEAM_MEMBER"; payload: string }
  | { type: "REMOVE_TEAM_MEMBER"; payload: string }
  | { type: "GET_TEAM_MEMBERS" }
  | { type: "IS_TEAM_MEMBER"; payload: string };

const TeamReducer = (
  state: TeamState = TeamInitialState,
  action: TeamAction
) => {
  switch (action.type) {
    case "ADD_TEAM_MEMBER": {
      if (state.teamMembers.length < 6) {
        return {
          ...state,
          teamMembers: [...state.teamMembers, action.payload],
        };
      }

      return state;
    }

    case "REMOVE_TEAM_MEMBER": {
      const newTeamMembers = state.teamMembers.filter(
        (member) => member !== action.payload
      );

      return {
        ...state,
        teamMembers: newTeamMembers,
      };
    }
  }
};

export default TeamReducer;
