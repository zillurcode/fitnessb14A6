
export interface iCard {
    id: string | number;
    title: string;
    muscleGroups: string; 
    image: string;      
    description?: string;
    category?: string;
    difficulty?: 'Beginner' | 'Intermediate' | 'Advanced';
    equipment?: string;
    sets?: number;
    reps?: number;
    isSaved?: boolean;
    group:string
    index:string

  }