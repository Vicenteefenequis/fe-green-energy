import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Header from "../../components/Header";
import FormStepProject from "./steps/form-project";
import { StepProvider, useStepContext } from "./hook";
import FormStepCity from "./steps/form-city";
import FormStepIndicator from "./steps/form-indicator";
import { useProjectCreateMutation } from "../../queries/useProjectCreateMutation";
import Loader from "../../components/Loader";
import { useNavigate } from "react-router-dom";
import { toProjectCreateBody } from "./helper";

export function HorizontalNonLinearStepper() {
  const {
    steps,
    activeStep,
    completed,
    allStepsCompleted,
    setPayload,
    handleComplete,
    payload,
  } = useStepContext();

  const { mutate: mutateProject, isLoading: isLoadingProjectCreate } =
    useProjectCreateMutation();

  const navigate = useNavigate();

  const handleConfirmAdvance = (form: any) => {
    setPayload((old) => ({ ...old, ...form }));
    handleComplete();
  };

  const renderStep: { [x: number]: React.ReactNode } = {
    1: (
      <FormStepProject
        onSubmit={(infoProject) => handleConfirmAdvance(infoProject)}
      />
    ),
    2: <FormStepCity onSubmit={(infoCity) => handleConfirmAdvance(infoCity)} />,
    3: (
      <FormStepIndicator
        onSubmit={(infoIndicator) => handleConfirmAdvance(infoIndicator)}
      />
    ),
  };

  React.useEffect(() => {
    if (allStepsCompleted()) {
      mutateProject(toProjectCreateBody(payload));
    }
  }, [allStepsCompleted, mutateProject, payload]);

  return (
    <Box sx={{ width: "100%" }}>
      <Header />
      <Stepper sx={{ my: 10 }} nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="inherit">{label}</StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <React.Fragment>
            {isLoadingProjectCreate ? (
              <Loader isLoading={true} />
            ) : (
              <Typography sx={{ mt: 2, mb: 1, mx: 5 }}>
                Você completou todas as informações!!
              </Typography>
            )}

            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                fullWidth
                variant="contained"
                sx={{ mx: 5 }}
                onClick={() => navigate("/")}
              >
                Navegar para Projetos
              </Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>{renderStep[activeStep + 1]}</React.Fragment>
        )}
      </div>
    </Box>
  );
}

export function ControlStep() {
  const { activeStep, completed, steps, completedSteps, totalSteps } =
    useStepContext();

  return (
    <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
      <Box sx={{ flex: "1 1 auto" }} />
      {activeStep !== steps.length &&
        (completed[activeStep] ? (
          <Typography variant="caption">
            Você já completou o passo {activeStep + 1}.{" "}
          </Typography>
        ) : (
          <Button variant="contained" sx={{ px: 2, mx: 2 }} type="submit">
            {completedSteps() === totalSteps() - 1 ? "Finalizar" : "Avançar"}
          </Button>
        ))}
    </Box>
  );
}

export default function WithProvider() {
  return (
    <StepProvider>
      <HorizontalNonLinearStepper />
    </StepProvider>
  );
}
