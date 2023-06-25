"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { FaPen, FaUserGraduate, FaUserTie, FaUsers } from "react-icons/fa";

import CategoryBox from "../CategoryBox";
import Container from "../Container";

export const categories = [
  {
    label: "Full-time Undergraduates",
    icon: FaPen,
    description:
      "This section is for Consultation For Full-time Undergraduates!",
  },
  {
    label: "Full & Part-time Graduates, Exchange & Special Students",
    icon: FaUserGraduate,
    description:
      "This section is for Consultation For Full & Part-time Graduates, Exchange & Special Students!",
  },
  {
    label: "Staff",
    icon: FaUserTie,
    description:
      "This section is for Consultation For Full-time Undergraduates!",
  },
  {
    label: "Others",  
    icon: FaUsers,
    description: "This section is for Consultation For Others!",
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();
  const isMainPage = pathname === "/";

  return (
    <Container>
      <div
        // className="
        //   pt-4
        //   flex
        //   flex-row
        //   items-center
        //   justify-between
        //   overflow-x-auto
        // "
        className={`pt-4 flex flex-row items-center justify-between overflow-x-auto ${
          isMainPage ? "" : "hidden"
        }`}
      >
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
