"use client";

import React from "react";
import Modal from "./Modal";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import useProfileModal from "../../app/hooks/useProfileModal";
import { useMemo, useState } from "react";
import ImageUpload from "../inputs/ImageUpload";
import Heading from "../Heading";
import Input from "../inputs/Input";
import getCurrentUser from "../../app/actions/getCurrentUser";

const ProfileModal = () => {
  const router = useRouter();
  const profileModal = useProfileModal();

  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: undefined,
      password: undefined,
      imgSrc: undefined,
      email: undefined,
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      .post("/api/profile", data)
      .then(() => {
        toast.success("Profile Updated");
        router.refresh();
        profileModal.onClose();
      })
      .catch(() => {
        toast.error("Something went wrong.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  let bodyContent = (
    <div className="flex flex-col p-6 gap-6">
      <div className="flex flex-col gap-2">
        <Heading title="Update your name" />
        <Input
          id="name"
          label="New Name"
          disabled={isLoading}
          register={register}
          errors={errors}
        />
      </div>
      <div className="flex flex-col gap-2">
        <Heading title="Update your email" />
        <Input
          id="email"
          label="New Email"
          disabled={isLoading}
          register={register}
          errors={errors}
        />
      </div>
      <div className="flex flex-col gap-2">
        <Heading title="Change your password" />
        <Input
          id="password"
          label="New Password"
          type={isChecked ? "text" : "password"}
          disabled={isLoading}
          register={register}
          errors={errors}
        />
        <label>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheck}
            className="mr-2"
          />
          Show your password
        </label>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={profileModal.isOpen}
      title="Edit Profile"
      actionLabel="Save Profile"
      onClose={profileModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
    />
  );
};

export default ProfileModal;
