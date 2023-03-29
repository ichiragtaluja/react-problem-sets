import logo from "./logo.svg";
import "./App.css";
import { EmployeeCard } from "./Pset1Question1/EmployeeCard";
import { CustomeButton } from "./Pset1Question2/CustomeButton";
import {
  backgroundColor,
  color,
  borderRadius,
  padding,
} from "./Pset1Question2/backgroundColor";
import { StationaryItems } from "./Pset1Question3/StationaryItems";
import { items } from "./Pset1Question3/items";
import { DisplayImage } from "./Pset1Question4/DisplayImage";
import { imageLink, caption } from "./Pset1Question4/imageLink";
import { ProductDetails } from "./Pset1Question5/ProductDetails";
import { products } from "./Pset1Question5/products";
import { DisplayProducts } from "./Pset1Question6/DisplayProducts";
import { productsDescription } from "./Pset1Question6/productsDescription";
import { StudentDetails } from "./Pset1Question7/StudentDetails";
import { student } from "./Pset1Question7/student";
import { employees } from "./Pset1Question8,9,10/employees";
import { EmployeesDetails } from "./Pset1Question8,9,10/EmployeesDetails";

function App() {
  return (
    <div className="App">
      <EmployeeCard
        name="Chirag"
        designation="Software Engineer"
        workExperience="2 years"
      />

      <CustomeButton
        backgroundColor={backgroundColor}
        color={color}
        borderRadius={borderRadius}
        padding={padding}
      />

      <StationaryItems items={items} header="Stationary Items" />

      <DisplayImage imageLink={imageLink} caption={caption} />

      <ProductDetails products={products} />

      <DisplayProducts products={productsDescription} />

      <StudentDetails student={student} />

      <EmployeesDetails employees={employees} />
    </div>
  );
}

export default App;
