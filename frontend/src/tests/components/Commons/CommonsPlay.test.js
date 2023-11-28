import { render, screen, waitFor } from "@testing-library/react";
import CommonsPlay from "main/components/Commons/CommonsPlay"; 
import commonsFixtures from "fixtures/commonsFixtures"; 
import { currentUserFixtures } from "fixtures/currentUserFixtures";

describe("CommonsPlay tests", () => {
    test("renders without crashing when user is userOnly", () => {
        render(
            <CommonsPlay currentUser={currentUserFixtures.userOnly } commons={commonsFixtures.oneCommons[0]} />
        );
        const currUserCommonsPlay = screen.getByTestId("CommonsPlay-title");
        expect(currUserCommonsPlay).toHaveStyle({fontSize: '50px', borderRadius: '8px', fontFamily: 'Copperplate', color: '#003366', backgroundColor: '#66B2FF', opacity: '0.9'});
    });

    test("renders without crashing when user is admin", () => {
        render(
            <CommonsPlay currentUser={currentUserFixtures.adminUser } commons={commonsFixtures.oneCommons[0]} />
        );
    });

    test("renders without crashing when currentUser.root is undefined", async () => {
        render(
            <CommonsPlay currentUser={currentUserFixtures.noRoot } commons={commonsFixtures.oneCommons[0]} />
        );

        await waitFor(()=>{
            expect(screen.getByTestId("CommonsPlay")).toBeInTheDocument();
        });

    });
});
