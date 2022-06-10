/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import Atomslogomyntra from "./Atomslogomyntra";
import { Flex, Text } from "@aws-amplify/ui-react";
import Atomsiconsmore from "./Atomsiconsmore";
import Atomsiconsbike from "./Atomsiconsbike";
import Atomsiconsbus from "./Atomsiconsbus";
import Atomsiconscar from "./Atomsiconscar";
import Atomsiconstrain from "./Atomsiconstrain";
export default function Organismscard2(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        "atoms/logo/myntra": {},
        "User Experience Designer": {},
        Myntra: {},
        "Hitech city, Hyderabad - 500072": {},
        "Frame 26": {},
        "atoms/icons/more": {},
        "Frame 29": {},
        "atoms/icons/bike": {},
        "atoms/icons/bus": {},
        "atoms/icons/car": {},
        "atoms/icons/train": {},
        "Frame 27": {},
        "36 min ago": {},
        "Frame 28": {},
        "Frame 30": {},
        "Frame 31": {},
        Organismscard2: {},
      },
      variantValues: { property1: "no" },
    },
    {
      overrides: {
        "atoms/logo/myntra": {},
        "User Experience Designer": {},
        Myntra: {},
        "Hitech city, Hyderabad - 500072": {},
        "Frame 26": {},
        "atoms/icons/more": {},
        "Frame 29": {},
        "atoms/icons/bike": {},
        "atoms/icons/bus": {},
        "atoms/icons/car": {},
        "atoms/icons/train": {},
        "Frame 27": {},
        "36 min ago": {},
        "Frame 28": {},
        "Frame 30": {},
        "Frame 31": {},
        Organismscard2: {
          padding: "14px 17px 14px 17px",
          border: "2px SOLID rgba(119,237,223,1)",
        },
      },
      variantValues: { property1: "yes" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="10px"
      direction="column"
      width="571px"
      position="relative"
      borderRadius="12px"
      padding="16px 19px 16px 19px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Organismscard2")}
    >
      <Flex
        gap="16px"
        direction="row"
        width="fit-content"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 31")}
      >
        <Atomslogomyntra
          display="flex"
          gap="10px"
          direction="row"
          width="fit-content"
          alignItems="flex-start"
          shrink="0"
          height="55px"
          position="relative"
          padding="5px 5px 5px 5px"
          {...getOverrideProps(overrides, "atoms/logo/myntra")}
        ></Atomslogomyntra>
        <Flex
          gap="33px"
          direction="column"
          shrink="0"
          height="127px"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 30")}
        >
          <Flex
            gap="172px"
            direction="row"
            width="462px"
            justifyContent="space-between"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 29")}
          >
            <Flex
              gap="4px"
              direction="column"
              shrink="0"
              height="70px"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 26")}
            >
              <Text
                fontFamily="Montserrat"
                fontSize="20px"
                fontWeight="500"
                color="rgba(55,60,56,1)"
                lineHeight="30px"
                textAlign="left"
                display="flex"
                direction="column"
                justifyContent="flex-start"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="User Experience Designer"
                {...getOverrideProps(overrides, "User Experience Designer")}
              ></Text>
              <Text
                fontFamily="Montserrat"
                fontSize="12px"
                fontWeight="500"
                color="rgba(255,114,94,1)"
                lineHeight="16px"
                textAlign="left"
                display="flex"
                direction="column"
                justifyContent="flex-start"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Myntra"
                {...getOverrideProps(overrides, "Myntra")}
              ></Text>
              <Text
                fontFamily="Montserrat"
                fontSize="12px"
                fontWeight="500"
                color="rgba(101,110,102,1)"
                lineHeight="16px"
                textAlign="left"
                display="flex"
                direction="column"
                justifyContent="flex-start"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Hitech city, Hyderabad - 500072"
                {...getOverrideProps(
                  overrides,
                  "Hitech city, Hyderabad - 500072"
                )}
              ></Text>
            </Flex>
            <Atomsiconsmore
              display="flex"
              gap="5px"
              direction="row"
              width="fit-content"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              height="24px"
              overflow="hidden"
              position="relative"
              padding="11px 4px 11px 4px"
              {...getOverrideProps(overrides, "atoms/icons/more")}
            ></Atomsiconsmore>
          </Flex>
          <Flex
            gap="268px"
            direction="row"
            width="462px"
            justifyContent="space-between"
            alignItems="flex-end"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 28")}
          >
            <Flex
              gap="16px"
              direction="row"
              width="fit-content"
              alignItems="center"
              shrink="0"
              height="24px"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 27")}
            >
              <Atomsiconsbike
                display="flex"
                gap="10px"
                direction="row"
                width="fit-content"
                alignItems="flex-start"
                shrink="0"
                height="24px"
                position="relative"
                padding="1.5px 4px 1.5px 4px"
                {...getOverrideProps(overrides, "atoms/icons/bike")}
              ></Atomsiconsbike>
              <Atomsiconsbus
                display="flex"
                gap="10px"
                direction="row"
                width="fit-content"
                alignItems="center"
                shrink="0"
                height="24px"
                position="relative"
                padding="3px 3px 3px 3px"
                {...getOverrideProps(overrides, "atoms/icons/bus")}
              ></Atomsiconsbus>
              <Atomsiconscar
                display="flex"
                gap="10px"
                direction="column"
                justifyContent="center"
                alignItems="center"
                shrink="0"
                height="24px"
                position="relative"
                padding="3.5px 2px 3.5px 2px"
                {...getOverrideProps(overrides, "atoms/icons/car")}
              ></Atomsiconscar>
              <Atomsiconstrain
                display="flex"
                gap="10px"
                direction="row"
                width="fit-content"
                justifyContent="center"
                alignItems="center"
                shrink="0"
                height="24px"
                position="relative"
                padding="3px 4.5px 3px 4.5px"
                {...getOverrideProps(overrides, "atoms/icons/train")}
              ></Atomsiconstrain>
            </Flex>
            <Text
              fontFamily="Montserrat"
              fontSize="12px"
              fontWeight="700"
              color="rgba(101,110,102,1)"
              lineHeight="16px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="36 min ago"
              {...getOverrideProps(overrides, "36 min ago")}
            ></Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
