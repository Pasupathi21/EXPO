/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Suspense } from "react";
import { Route } from "react-router-dom";

import { PageComponentArray } from "./PageComponentData";

// **************** App Data

// ****************** Interface
import { IPageComponentArray } from "../../../../types/index";

// ******************* Util
import { RANDOM_UNIQUE } from "../../../../utils/getUnique";

// ********************* | OLD RECURSIVE LOOP |
// const PageComponentArray = [
//   {
//     path: APP_ROUTES?.MEDIA?.pathName,
//     element: <TestComponent />,
//     isLazy: true,
//     children: [
//       {
//         path: "T1",
//         element: <TestComponent />,
//         isLazy: false,
//       },
//       {
//         path: "T1",
//         element: <TestComponent />,
//         isLazy: true,
//         children: [
//           {
//             path: "T1",
//             element: <TestComponent />,
//             isLazy: false,
//           },
//         ],
//       },
//     ],
//   },
//   {
//     path: APP_ROUTES?.MEDIA?.pathName,
//     element: <TestComponent />,
//     isLazy: true,
//     children: [
//       {
//         path: "T1",
//         element: <TestComponent />,
//         isLazy: false,
//       },
//       {
//         path: "T1",
//         element: <TestComponent />,
//         isLazy: true,
//         children: [
//           {
//             path: "T1",
//             element: <TestComponent />,
//             isLazy: false,
//           },
//         ],
//       },
//     ],
//   },
// ];
// const tempArray = [];
// const RecursiveFn = (array: any[], numVal: number): any[] => {
//   const index: number = numVal;
//   const obj:any = array[index];
//   if (obj?.children && Array.isArray(obj?.children)) {
//     tempArray.push(<Route>{}</Route>);
//   } else {
//     tempArray.push(
//       <Route
//         path={obj?.path}
//         element={
//           obj?.isLazy ? (
//             <Suspense>
//               <obj.element />
//             </Suspense>
//           ) : (
//             <obj.element />
//           )
//         }
//       />
//     );
//   }
// };
export default function PageComponents(): any {
  // const PagesComponents: JSX.Element[] = [];
  // PagesComponents = [...RecursiveFn(PageComponentArray, 0)];

  return PageComponentArray?.map((component: IPageComponentArray | any) => {
    return component?.isLazy ? (
      <Route
        path={component?.path}
        element={
          <Suspense>
            {component.element }
          </Suspense>
        }
        key={RANDOM_UNIQUE()}
      />
    ) : (
      <Route
        path={component?.path}
        element={component.element }
        key={RANDOM_UNIQUE()}
      />
    );
  });
}
