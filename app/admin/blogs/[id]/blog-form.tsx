"use client"
import { createOrUpdateBlog } from '@/actions/blog'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { IBlog } from '@/server/blog/model'
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

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const fd = new FormData(e.currentTarget)
        
        // Ensure tags are comma-separated
        fd.set('tags', selectedTags.join(','))
        
        const res = await createOrUpdateBlog(fd)
        if (res.error) {
            toast.error(res.error)
        } else {
            toast.success(res.message)
        }
    }

    return (
        <Card>
            <Toaster/>
            <CardHeader>
                <CardTitle>
                    {blog ? 'ערוך בלוג' : 'צור בלוג חדש'}
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

                    <div className="space-y-4">
                        {/* Title Input */}
                        <div>
                            <label htmlFor="title" className="block mb-2">כותרת הבלוג</label>
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
                            <label htmlFor="excerpt" className="block mb-2">תקציר הבלוג</label>
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
                            <label htmlFor="content" className="block mb-2">תוכן הבלוג</label>
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
                            שמור בלוג
                        </Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    )
}