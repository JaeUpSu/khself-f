import { Profile } from "./profile";

interface ISection {
  name: string;
  component: React.ReactElement;
}

const sections: ISection[] = [
  { name: "Profile", component: <Profile /> },
  { name: "Description", component: <Profile /> },
  { name: "PortFolio", component: <Profile /> },
  { name: "Contact", component: <Profile /> },
];

export const Sections = () => {
  return (
    <>
      {sections.map((section: ISection) => (
        <section
          key={section.name}
          id={section.name}
          style={{
            width: "100%",
            backgroundColor: "transparent",
          }}
        >
          {section.component}
        </section>
      ))}
    </>
  );
};
