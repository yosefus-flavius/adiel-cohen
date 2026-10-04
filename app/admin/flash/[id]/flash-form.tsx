"use client"

import { createOrUpdateFlash } from '@/actions/flash'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { IFlash } from '@/server/flash/flash.model'
// import { CldUploadWidget } from 'next-cloudinary'
// import Image from 'next/image'
// import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast, Toaster } from 'sonner'

export const FLASH_CATEGORIES: string[] = [
    "חדשות",
    "כלכלה",
    "משכנתאות",
    "טיפים",
    "תקציר",
    "דחוף",
    "סביבה",
]

export default function FlashForm({ flash }: { flash: IFlash | null }) {
    // const [img, setImg] = useState<string>(flash?.img || '/1.webp')
    const [isUploading, setIsUploading] = useState<boolean>(false)
    const { replace } = useRouter()

    // const handleCloudinaryUpload = (result: any) => {
    //     if (result.event === 'success') {
    //         const uploadedImageUrl = result.info.secure_url
    //         setImg(uploadedImageUrl)
    //         setIsUploading(false)
    //     }
    // }

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const fd = new FormData(e.currentTarget)

        // Force the image value
        // fd.set('img', img)

        const res = await createOrUpdateFlash(fd)
        console.log({ res })

        if (res.error) {
            toast.error(res.error)
        } else {
            toast.success(res.message)
            replace(`/admin/flash/${res.id}`)
        }
    }

    return (
        <Card>
            <Toaster />
            <CardHeader>
                <CardTitle>
                    {flash ? 'ערוך פלש' : 'צור פלש חדש'}
                </CardTitle>
            </CardHeader>

            <CardContent>
                <form onSubmit={onSubmit}>

                    {flash && (
                        <input
                            type="hidden"
                            name="id"
                            defaultValue={flash._id?.toString()}
                        />
                    )}

                    {/* Cloudinary Upload */}
                    {/* <div className="space-y-4">
                        <label className="block mb-2">תמונת פלש</label>

                        <CldUploadWidget
                            uploadPreset="flash_pre"
                            onUploadStart={() => setIsUploading(true)}
                            onSuccess={handleCloudinaryUpload}
                            options={{
                                maxFiles: 1,
                                resourceType: 'image',
                                folder: 'flash_pre'
                            }}
                        >
                            {({ open }: { open: () => void }) => (
                                <Button
                                    type="button"
                                    variant="outline"
                                    disabled={isUploading}
                                    onClick={() => open()}
                                >
                                    {isUploading ? 'מעלה...' : 'העלה תמונה'}
                                </Button>
                            )}
                        </CldUploadWidget>

                        {img && (
                            <div className="mt-4 relative w-64 h-40">
                                <Image
                                    src={img}
                                    alt="תצוגה מקדימה"
                                    fill
                                    className="object-cover rounded-md"
                                />
                            </div>
                        )}

                        <input type="hidden" name="img" value={img} />
                    </div> */}

                    <div className="space-y-4 mt-6">

                        {/* Title */}
                        <div>
                            <label className="block mb-2">כותרת</label>
                            <Input
                                name="title"
                                defaultValue={flash?.title || ''}
                                required
                            />
                        </div>

                        {/* Content */}
                        <div>
                            <label className="block mb-2">תוכן הפלש</label>
                            <Textarea
                                name="content"
                                defaultValue={flash?.content || ''}
                                className="min-h-[180px]"
                                required
                            />
                        </div>

                        {/* links */}
                        <div>
                            <label className="block mb-2">לינקים - כל אחד בשורה</label>
                            <Textarea
                                name="links"
                                defaultValue={flash?.links?.join('\n') || ''}
                                className="min-h-[180px]"
                            />
                        </div>

                        {/* Category */}
                        <div>
                            <label className="block mb-2">קטגוריה</label>
                            <Select
                                name="category"
                                defaultValue={flash?.category || ''}
                                dir="rtl"
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="בחר קטגוריה" />
                                </SelectTrigger>

                                <SelectContent>
                                    {FLASH_CATEGORIES.map(category => (
                                        <SelectItem key={category} value={category}>
                                            {category}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Active */}
                        <div className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                name="isActive"
                                defaultChecked={!!flash?.isActive}
                            />
                            <label className="text-sm">פעיל</label>
                        </div>

                        {/* Submit */}
                        <Button type="submit" className="w-full mt-4">
                            שמור פלש
                        </Button>


                    </div>
                </form>
            </CardContent>
        </Card>
    )
}
