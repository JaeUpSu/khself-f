import {
  Box,
  Spacer,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";

const steps = [
  { title: "First", description: "유입경로" },
  { title: "Second", description: "이름/이메일" },
  { title: "Third", description: "요청사항" },
];

interface Props {
  activeIndex: number;
}

export const ContactStepper = ({ activeIndex }: Props) => {
  const { activeStep, setActiveStep } = useSteps({
    index: activeIndex,
    count: steps.length,
  });

  useEffect(() => {
    setActiveStep(activeIndex);
  }, [activeIndex]);

  return (
    <Stepper index={activeStep} colorScheme="pink" mt="5">
      {steps.map((step, index) => (
        <Step key={index}>
          <StepIndicator>
            <StepStatus
              complete={<StepIcon />}
              incomplete={<StepNumber />}
              active={<StepNumber />}
            />
          </StepIndicator>
          <Box flexShrink="0">
            <StepTitle>{step.title}</StepTitle>
            <Spacer mb="1" />
            <StepDescription style={{ fontSize: "9pt" }}>
              {step.description}
            </StepDescription>
          </Box>
          <StepSeparator />
        </Step>
      ))}
    </Stepper>
  );
};
