import { createContext, useContext, useReducer } from "react";
import TeamReducer, { TeamInitialState } from "../reducers/TeamReducer";

interface TeamContextValue {
  addTeamMember: (id: string) => void;
  removeTeamMember: (id: string) => void;

  // Cuantos miembros tiene el equipo
  getTeamMembers: () => number;

  isTeamMember: (id: string) => boolean;
}

const TeamContext = createContext<TeamContextValue | null>(null);

interface TeamContextProviderProps {
  children: React.ReactNode;
}

const TeamContextProvider: React.FC<TeamContextProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(TeamReducer, TeamInitialState);

  const addTeamMember = (id: string) => {
    dispatch({
      type: "ADD_TEAM_MEMBER",
      payload: id,
    });
  };

  const removeTeamMember = (id: string) => {
    dispatch({
      type: "REMOVE_TEAM_MEMBER",
      payload: id,
    });
  };

  const getTeamMembers = () => {
    return state?.teamMembers.length || 0;
  };

  const isTeamMember = (id: string) => {
    return state?.teamMembers.includes(id) || false;
  };

  return (
    <TeamContext.Provider
      value={{
        addTeamMember,
        removeTeamMember,
        getTeamMembers,
        isTeamMember,
      }}
    >
      {children}
    </TeamContext.Provider>
  );
};

export const useTeamContext = () => {
  const context = useContext(TeamContext);

  if (!context) {
    throw new Error("useTeamContext must be used within TeamContextProvider");
  }

  return context;
};

export default TeamContextProvider;
