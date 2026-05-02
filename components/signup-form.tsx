import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function SignupForm({ ...props }: React.ComponentProps<typeof Card>) {
  return (
    <Card {...props} className="w-full rtl:*:autofill:">
      <CardHeader>
        <CardTitle>أنشئ حسابًا </CardTitle>
        <CardDescription>
أدخل معلوماتك أدناه لإنشاء حسابك        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="name">الاسم الكامل</FieldLabel>
              <Input id="name" type="text" placeholder="Ahmed Mohamed" required />
            </Field>
            <Field>
              <FieldLabel htmlFor="email">البريد الإلكتروني</FieldLabel>
              <Input
                id="email"
                type="email"
                placeholder="Ahmed1001@google.com"
                required
              />
              <FieldDescription>
                سنستخدم هذه المعلومات للتواصل معك. ولن نشارك بريدك الإلكتروني مع أي جهة أخرى.

              </FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="password">كلمة المرور
</FieldLabel>
              <Input id="password" type="password" required />
              <FieldDescription>
                يجب أن يكون طوله 8 أحرف على الأقل.
.
              </FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="confirm-password">
                تأكيد كلمة المرور
              </FieldLabel>
              <Input id="confirm-password" type="password" required />
              <FieldDescription>يرجى تأكيد كلمة المرور الخاصة بك.
</FieldDescription>
            </Field>
            <FieldGroup>
              <Field>
                <Button type="submit">إنشاء حساب</Button>
                {/*<Button variant="outline" type="button">
                  Sign up with Google
                </Button>*/}
                <FieldDescription className="px-6 text-center">
                  هل لديك حساب بالفعل؟
 <a href="#">تسجيل الدخول</a>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}
