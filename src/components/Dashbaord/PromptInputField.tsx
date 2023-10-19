import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import Looks3Icon from "@mui/icons-material/Looks3";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import SendIcon from "@mui/icons-material/Send";
import {
  Badge,
  Divider,
  IconButton,
  InputBase,
  Paper,
  Tooltip,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { blueGrey, yellow } from "@mui/material/colors";
import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { Flip, Id, toast, Zoom } from "react-toastify";

interface PromptInputFieldProps {
  promptValue: string;
  setPromptValue: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  presetIndex: string;
  setPresetIndex: React.Dispatch<React.SetStateAction<string>>;
  setGeneratedImages: React.Dispatch<React.SetStateAction<string[]>>;
}

interface GenerateRequestPayload {
  preset: string;
  user_input: string;
  n_output: number;
}

interface GenerateResponsePayload {
  imgs: string[];
}

export const PromptInputField = ({
  promptValue,
  setPromptValue,
  isLoading,
  setIsLoading,
  presetIndex,
  setPresetIndex,
  setGeneratedImages,
}: PromptInputFieldProps) => {
  const theme = useTheme();

  const isDestopMode = useMediaQuery("(min-width:600px)");

  const toastId = React.useRef<Id | null | undefined>(null);

  const notifyLoading = () => {
    if (null !== toastId)
      toastId.current = toast.loading(
        "🙏 Please be patient, Generating Image now...",
        {
          position: "top-center",
          style: { width: isDestopMode ? "430px" : "100%" },
          transition: Zoom,
        }
      );
  };

  const dismissLoadingAsSuccess = () => {
    if (
      null !== toastId &&
      null !== toastId.current &&
      undefined !== toastId.current
    )
      toast.update(toastId.current, {
        render: "Image generation is completed",
        style: { width: isDestopMode ? "320px" : "100%" },
        type: "success",
        isLoading: false,
        autoClose: 3000,
        hideProgressBar: false,
        transition: Flip,
      });
  };

  const dismissLoadingAsError = () => {
    if (
      null !== toastId &&
      null !== toastId.current &&
      undefined !== toastId.current
    )
      toast.update(toastId.current, {
        render: "Unexcepted Error, Please Try Again",
        style: { width: isDestopMode ? "400px" : "100%" },
        type: "error",
        isLoading: false,
        autoClose: 3000,
        hideProgressBar: false,
        transition: Flip,
      });
  };
  const dismissAll = () => toast.dismiss();

  const generateRequest = (preset: string, userInput: string) => {
    setIsLoading(true);
    setGeneratedImages([]);
    notifyLoading();
    const response = axios
      .post<GenerateRequestPayload, AxiosResponse<GenerateResponsePayload>>(
        "http://13.212.253.138:8000/generate",
        {
          preset: preset,
          user_input: userInput,
          n_output: 3,
        },
        { timeout: 60000 }
      )
      .then(function (response) {
        // handle success
        console.log(response);
        setGeneratedImages(response.data.imgs);
        dismissLoadingAsSuccess();
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        dismissLoadingAsError();
      })
      .finally(function () {
        // always executed
        setIsLoading(false);
      });
  };

  return (
    <>
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
        }}
      >
        {presetIndex === "" && (
          <Tooltip
            title="Please Select Recommended Prompt"
            placement="top"
            enterTouchDelay={0}
          >
            <HelpOutlineIcon
              fontSize="large"
              sx={{ ml: 1, color: yellow[800] }}
            />
          </Tooltip>
        )}
        {presetIndex === "1" && (
          <LooksOneIcon fontSize="large" sx={{ ml: 1, color: blueGrey[900] }} />
        )}
        {presetIndex === "2" && (
          <LooksTwoIcon fontSize="large" sx={{ ml: 1, color: blueGrey[900] }} />
        )}
        {presetIndex === "3" && (
          <Looks3Icon fontSize="large" sx={{ ml: 1, color: blueGrey[900] }} />
        )}
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          multiline
          minRows={2}
          maxRows={6}
          value={promptValue}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setPromptValue(event.target.value);
          }}
          disabled={presetIndex === ""}
        />
        <Tooltip title="Clear Prompt" placement="top">
          <span>
            <IconButton
              type="button"
              sx={{ p: "10px" }}
              aria-label="clear"
              onClick={() => {
                setPromptValue("");
                setPresetIndex("");
                setIsLoading(false);
              }}
            >
              <ClearIcon />
            </IconButton>
          </span>
        </Tooltip>

        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <LoadingButton
          sx={{ p: "10px" }}
          aria-label="search"
          onClick={() => generateRequest(presetIndex, promptValue)}
          disabled={presetIndex === ""}
          loading={isLoading}
        >
          <SendIcon />
        </LoadingButton>
      </Paper>
    </>
  );
};
