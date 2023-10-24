import React, { useContext, createContext, PropsWithChildren, useState, useEffect } from "react";
import { StepContextType } from "./types";
import { toast } from "react-toastify";
import { Indicator } from "../../models/indicator";



const StepContext = createContext<StepContextType>({} as StepContextType);

export const StepProvider = ({ children }: PropsWithChildren) => {
    const [payload, setPayload] = useState<Indicator.Input>({} as Indicator.Input)

    const [hasError, setHasError] = useState(false);
    const steps = ['Informações do Projeto', 'Informações da Cidade', 'Informações de indicadores'];
    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState<{
        [k: number]: boolean;
    }>({});

    const totalSteps = () => {
        return steps.length;
    };

    const completedSteps = () => {
        return Object.keys(completed).length;
    };

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

    const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
    };

    const handleNext = () => {
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ?
                steps.findIndex((step, i) => !(i in completed))
                : activeStep + 1;
        setActiveStep(newActiveStep);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStep = (step: number) => () => {
        setActiveStep(step);
    };

    const handleComplete = () => {
        if (hasError) return;
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();
    };

    const handleReset = () => {
        setActiveStep(0);
        setCompleted({});
    };

    useEffect(() => {
        if (hasError) toast.error("Preencha todos os campos corretamente")
    }, [])

    return <StepContext.Provider value={{
        steps,
        completed,
        activeStep,
        handleNext,
        completedSteps,
        totalSteps,
        allStepsCompleted,
        handleBack,
        handleStep,
        handleComplete,
        handleReset,
        hasError,
        setHasError,
        setPayload,
        payload
    }}>{children}</StepContext.Provider>;
}

export function useStepContext() {
    const context = useContext(StepContext);

    return context;
}