import { Indicator } from "../../models/indicator";




export interface StepContextType {
    steps: string[]
    completed: {
        [k: number]: boolean;
    }
    activeStep: number;
    hasError: boolean;
    setHasError: React.Dispatch<React.SetStateAction<boolean>>
    setPayload: React.Dispatch<React.SetStateAction<Indicator.Input>>
    payload: Indicator.Input
    handleNext: () => void
    completedSteps: () => number
    totalSteps: () => number
    allStepsCompleted: () => boolean
    handleBack: () => void
    handleStep: (step: number) => () => void
    handleComplete: () => void
    handleReset: () => void
}