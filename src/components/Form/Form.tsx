import { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
// import * as yup from 'yup'
// import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from "@mantine/core";
import InputForm from "../InputForm/InputForm";
import { FormComponent, ButtonContainer } from "./styles";
import { Data } from "../../Data/FormData";
import AddInfo from "../AddInfo/AddInfo";
import SelectComponent from "../SelectComponent/SelectComponent";
import Recaptcha from "../Rechaptcha/Recaptcha";

import { db } from "../../firebase";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";

import {
  getStorage,
  ref,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";

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

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    formState,
  } = useForm<Inputs>();

  //Handles the submit button
  const HandleSubmit = handleSubmit(async (data: any) => {
    applicationUpload(data);
    async function applicationUpload(data: any) {
      const resume = data.files[0];
      console.log(resume);
      const storage = getStorage();
      const storageRef = ref(storage, resume.name);
      const upload = uploadBytesResumable(storageRef, resume);

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
        const getResumeURL = async () => {
          getDownloadURL(upload.snapshot.ref).then(async (url) => {
            console.log(`resume url ${url}`);
            await updateDoc(doc(db, "applications", res.id), {
              resumeURL: (data.resumeLink = url),
            });
          });
        };
        getResumeURL();
        alert("Submited Sucessfully");
      } catch (error) {
        console.log(error);
      }
    }
  });

  // console.log(errors.fullName)

  return (
    <FormComponent onSubmit={HandleSubmit}>
      {Data.map((items: any) => {
        return (
          <InputForm
            key={items.id}
            {...items}
            watch={watch}
            errors={errors}
            register={register}
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
    </FormComponent>
  );
};

export default Form;
