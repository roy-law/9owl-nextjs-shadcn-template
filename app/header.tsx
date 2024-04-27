"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";

export function Header() {
  const session = useSession();

  return (
    <header>
      <div>
        {session.data ? (
          <Button onClick={() => signOut()}>{"Sign out"}</Button>
        ) : (
          <Button
            onClick={() => signIn("auth0", { login_hint: "info@example.com" })}
          >
            {"Sign in"}
          </Button>
        )}
        <ModeToggle />
      </div>
    </header>
  );
}
