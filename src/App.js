import logo from "./logo.svg";
import "./App.css";
import { EmployeeCard } from "./Question1/EmployeeCard";
import { CustomeButton } from "./Question2/CustomeButton";
import {
  backgroundColor,
  color,
  borderRadius,
  padding,
} from "./Question2/backgroundColor";
import { StationaryItems } from "./Question3/StationaryItems";
import { items } from "./Question3/items";
import { DisplayImage } from "./Question4/DisplayImage";
import { imageLink, caption } from "./Question4/imageLink";
import { ProductDetails } from "./Question5/ProductDetails";
import { products } from "./Question5/products";
import { DisplayProducts } from "./Question6/DisplayProducts";
import { productsDescription } from "./Question6/productsDescription";
import { StudentDetails } from "./Question7/StudentDetails";
import { student } from "./Question7/student";
import { employees } from "./Question8,9,10/employees";
import { EmployeesDetails } from "./Question8,9,10/EmployeesDetails";

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
