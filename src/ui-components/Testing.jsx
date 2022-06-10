/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, TextField, View } from "@aws-amplify/ui-react";
export default function Testing(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="357px"
      height="162px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Testing")}
    >
      <Text
        fontFamily="Montserrat"
        fontSize="12px"
        fontWeight="500"
        color="rgba(0,0,0,1)"
        lineHeight="16px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="45px"
        left="26px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Form element"
        {...getOverrideProps(overrides, "Form element")}
      ></Text>
      <TextField
        display="flex"
        gap="8px"
        position="absolute"
        top="70px"
        left="29px"
        direction="column"
        width="300px"
        justifyContent="center"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        label="Label"
        placeholder="Placeholder"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "TextField")}
      ></TextField>
    </View>
  );
}
