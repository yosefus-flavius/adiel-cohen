'use client'

import { deleteLead } from "@/actions/lead"
import { Trash } from "lucide-react"
import { Button } from "../ui/button"

export default function DeleteButton({ id, isActive }: { id: string, isActive: boolean }) {
   return (
      <form action={deleteLead}>
         <input type="text" name="id" value={id} readOnly hidden />
         <Button variant="ghost">
            {isActive ? <Trash className="h-4 w-4" /> : <Trash className="text-muted-foreground h-4 w-4" />}
         </Button>
      </form>
   )
}
