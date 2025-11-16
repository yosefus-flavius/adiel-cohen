"use client"
import { createOrUpdateBlog } from '@/actions/blog'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { IBlog } from '@/server/blog/blog.model'
import { CldUploadWidget } from 'next-cloudinary'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast, Toaster } from 'sonner'


export const BLOG_CATEGORIES: string[] = [
    "מדריכים",
    "כלכלה",
    "טיפים",
    "השקעות",
    "זכויות",
    "רגולציה",
    "טכנולוגיה",
    "סביבה"
];

export default function BlogForm({ blog }: { blog: IBlog | null }) {
    const [selectedTags, setSelectedTags] = useState<string[]>(blog?.tags || [])
    const [coverImage, setCoverImage] = useState<string>(blog?.coverImage || '/1.webp')
    const [isUploading, setIsUploading] = useState<boolean>(false)
    const { replace } = useRouter()


    const handleCloudinaryUpload = (result: any) => {
        if (result.event === 'success') {
            const uploadedImageUrl = result.info.secure_url
            setCoverImage(uploadedImageUrl)
            setIsUploading(false)
        }
    }

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const fd = new FormData(e.currentTarget)

        // Ensure tags are comma-separated
        fd.set('tags', selectedTags.join(','))
        fd.set('coverImage', coverImage)

        const res = await createOrUpdateBlog(fd)
        if (res.error) {
            toast.error(res.error)
        } else {
            toast.success(res.message)
            replace(`/admin/blogs/${res.id}`)
        }
    }

    return (
        <Card>
            <Toaster />
            <CardHeader>
                <CardTitle>
                    {blog ? 'ערוך מאמר' : 'צור מאמר חדש'}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={onSubmit}>
                    {/* Hidden input for ID if editing */}
                    {blog && (
                        <input
                            type="hidden"
                            name="id"
                            defaultValue={blog._id?.toString()}
                        />
                    )}

                    {/* Cloudinary Image Upload with Preview */}
                    <div className="space-y-4">
                        <label className="block mb-2">תמונת כריכה</label>
                        <CldUploadWidget
                            uploadPreset="blog_pre"
                            // @ts-ignore
                            onUploadStart={(event: { type: string }) => {
                                setIsUploading(true)
                            }}
                            onSuccess={handleCloudinaryUpload}
                            options={{
                                maxFiles: 1,
                                resourceType: 'image',
                                folder: 'blog_pre'
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

                        {coverImage && (
                            <div className="mt-4 relative w-64 h-40">
                                <Image
                                    src={coverImage}
                                    alt="תצוגה מקדימה של תמונת כריכה"
                                    fill
                                    className="object-cover rounded-md"
                                />
                            </div>
                        )}

                        <input
                            type="hidden"
                            name="coverImage"
                            value={coverImage}
                        />
                    </div>

                    <div className="space-y-4">
                        {/* Title Input */}
                        <div>
                            <label htmlFor="title" className="block mb-2">כותרת המאמר</label>
                            <Input
                                id="title"
                                name="title"
                                defaultValue={blog?.title || ''}
                                required
                            />
                        </div>

                        {/* Slug Input */}
                        <div>
                            <label htmlFor="slug" className="block mb-2">כתובת URL</label>
                            <Input
                                id="slug"
                                name="slug"
                                defaultValue={blog?.slug || ''}
                                required
                            />
                        </div>

                        {/* Excerpt Input */}
                        <div>
                            <label htmlFor="excerpt" className="block mb-2">תקציר המאמר</label>
                            <Textarea
                                id="excerpt"
                                name="excerpt"
                                defaultValue={blog?.excerpt || ''}
                                className="min-h-[100px]"
                                required
                            />
                        </div>

                        {/* Content Textarea */}
                        <div>
                            <label htmlFor="content" className="block mb-2">תוכן המאמר</label>
                            <Textarea
                                id="content"
                                name="content"
                                defaultValue={blog?.content || ''}
                                className="min-h-[200px]"
                                required
                            />
                        </div>

                        {/* Cover Image Input */}
                        <div>
                            <label htmlFor="coverImage" className="block mb-2">תמונת כריכה (URL)</label>
                            <Input
                                id="coverImage"
                                name="coverImage"
                                type="text"
                                defaultValue={blog?.coverImage || '/1.webp'}
                                required
                            />
                        </div>

                        {/* Category Select */}
                        <div>
                            <label htmlFor="category" className="block mb-2">קטגוריה</label>
                            <Select
                                name="category"
                                defaultValue={blog?.category || ''}
                                dir="rtl"
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="בחר קטגוריה" />
                                </SelectTrigger>
                                <SelectContent>
                                    {BLOG_CATEGORIES.map(category => (
                                        <SelectItem key={category} value={category}>
                                            {category}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Tags Multiselect */}
                        <div>
                            <label className="block mb-2">תגיות</label>
                            <Input
                                name="tags"
                                value={selectedTags.join(',')}
                                onChange={(e) => setSelectedTags(e.target.value.split(','))}
                            />
                        </div>

                        {/* Active Status */}
                        <div className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                id="isActive"
                                name="isActive"
                                defaultChecked={!!blog?.isActive}
                                className="form-checkbox"
                            />
                            <label htmlFor="isActive" className="text-sm">פעיל</label>
                        </div>

                        {/* Submit Button */}
                        <Button type="submit" className="w-full mt-4">
                            שמור מאמר
                        </Button>
                        {/* see the real page  */}
                        {blog?.slug && <Link href={`/blog/${blog?.slug}`} target="_blank" className="w-full mt-4">
                            <Button type="button" variant="outline" className="w-full mt-4">
                                תצוגה מקדימה
                            </Button>
                        </Link>}
                    </div>
                </form>
            </CardContent>
        </Card>
    )
}