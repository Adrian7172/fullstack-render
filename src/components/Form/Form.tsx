import { useState } from "react";

import { useForm } from "react-hook-form";

import { Button } from "@mantine/core";
import InputForm from "../InputForm/InputForm";
import { FormComponent, ButtonContainer } from "./styles";
import { Data } from "../../Data/FormData";
import AddInfo from "../AddInfo/AddInfo";
import SelectComponent from "../SelectComponent/SelectComponent";
import Recaptcha from "../Rechaptcha/Recaptcha";

import { db } from "../../firebase";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import axios from 'axios';

import {
  getStorage,
  ref,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";
import Footer from "../Footer/Footer";

enum GenderEnum {
  select = "select",
  female = "female",
  male = "male",
  other = "prefer not to say",
}

export interface Inputs {
  files: string;
  fullName: string;
  email: string;
  phone: number;
  currentCompany: string;
  linkdIn: string;
  twitter: string;
  gitHub: string;
  portfolio: string;
  otherWebsite: string;
  option: GenderEnum;
  AddtionalInfo: string;
}

const Form = () => {
  const [varified, setVarified] = useState(false);
  const [File, setFile] = useState("Attach Resume/cv");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    formState,
  } = useForm<Inputs>();

  //Handles the submit button
  const HandleSubmit = handleSubmit(async (data: any) => {
    applicationUpload(data);
    async function applicationUpload(data: any) {
      const file = data.files[0];
      const storage = getStorage();
      const storageRef = ref(storage, file.name);
      const upload = uploadBytesResumable(storageRef, file);

      try {
        const res = await addDoc(collection(db, "applications"), {
          fullName: data.fullName,
          email: data.email,
          phone: data.phone,
          currentCompany: data.currentCompany,
          linkdIn: data.linkdIn,
          twitter: data.twitter,
          gitHub: data.gitHub,
          portfolio: data.portfolio,
          otherWebsite: data.otherWebsite,
          option: data.option,
          AddtionalInfo: data.AddtionalInfo,
        });

        const uploadToStrapi = async (data: any) => {
          const sendData = {
            fullName: data.fullName,
            Email: data.email,
            PhoneNumber: data.phone,
            currentCompany: data.currentCompany,
            linkedinURL: data.linkdIn,
            twitterURL: data.twitter,
            gitHubURL: data.gitHub,
            portfolioURL: data.portfolio,
            otherWebsiteURL: data.otherWebsite,
            option: data.option,
            AddtionalInfo: data.AddtionalInfo,
          };
          // const file = data.files[0];

          const request = new XMLHttpRequest();
          const formData = new FormData();
          // formData.append("ResumeFile", file, file.name);

          formData.append("data", JSON.stringify(sendData));

          request.open("POST", `http://localhost:1337/api/render-data`);
          request.send(formData);
        };

        const getResumeURL = async () => {
          getDownloadURL(upload.snapshot.ref).then(async (url) => {
            console.log(`resume url ${url}`);
            await updateDoc(doc(db, "applications", res.id), {
              resumeURL: url,
            });
          });
        };
        uploadToStrapi(data);
        getResumeURL();
        alert("Submited Sucessfully");
      } catch (error) {
        console.log(error);
      }
    }
  });

  return (
    <FormComponent onSubmit={HandleSubmit}>
      {Data.map((items: any) => {
        return (
          <InputForm
            key={items.id}
            {...items}
            errors={errors}
            register={register}
            File={File}
            setFile={setFile}
          />
        );
      })}
      <AddInfo name={"AddtionalInfo"} errors={errors} register={register} />
      <SelectComponent errors={errors} register={register} />

      <Recaptcha setVarified={setVarified} />
      <ButtonContainer>
        <Button
          type="submit"
          className="button"
          color="indigo"
          size="md"
          disabled={!varified}
        >
          Submit Application
        </Button>
      </ButtonContainer>

    <Footer />
    </FormComponent>
  );
};

export default Form;
