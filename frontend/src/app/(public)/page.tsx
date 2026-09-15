import React from "react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f7fafd] text-[#181c1e]">
      {/* TopNavBar */}
      <nav className="bg-white w-full h-20 sticky top-0 border-b border-slate-200 shadow-sm z-50">
        <div className="flex items-center justify-between px-6 lg:px-16 max-w-[1280px] mx-auto w-full h-full">
          <div className="flex items-center">
            <img 
              alt="PTI Insurance" 
              className="h-10 object-contain mr-8" 
              src="https://lh3.googleusercontent.com/aida/AP1WRLt8dpg9hNn06EcEAvsMk3uOi4VLfeAC7Fvop1jmC4YrIOnYDbXt0qSUyKKp7woX8wLt9235EFM--50krvaIGZNeSXhKPBIga_o_bgCVZX5NG6qNUZSuidKzYG8riJyp1MeumTYXfirJ0k-NNKxe7jNOAwtUSBY9QQxPwoC_ZPi94HfTj2NN2DBYKv6TXmXLBDZxtliGsTcKuV6u-GnvjAJHJCtE_qdtInjE1Y4MKuVYo5xHv_PgBIiuzA"
            />
            <div className="hidden md:flex space-x-6 text-sm font-semibold text-slate-600">
              <a className="text-[#005098] border-b-2 border-[#005098] pb-1" href="#">Về PTI</a>
              <a className="hover:text-[#005098] transition" href="#">Khách hàng cá nhân</a>
              <a className="hover:text-[#005098] transition" href="#">Khách hàng doanh nghiệp</a>
              <a className="hover:text-[#005098] transition" href="#">Mạng lưới dịch vụ</a>
              <a className="hover:text-[#005098] transition" href="#">Tin tức</a>
              <a className="hover:text-[#005098] transition" href="#">Tuyển dụng</a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-[#005098] p-2 rounded-full hover:bg-slate-100">
              <span className="material-symbols-outlined">search</span>
            </button>
            <button className="bg-[#005098] text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-blue-800 transition">Login</button>
          </div>
        </div>
      </nav>

      {/* Hero Banner */}
      <section className="relative bg-slate-100 w-full min-h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <div 
            className="bg-cover bg-center w-full h-full opacity-35" 
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCwfVgW01AHib6JVF0sjP6kamBY5C3v6LAUpbTzzwGWN0nvbVKYVII5jW1O5qviitdQpGGnhtJz4jIComRZ8f78TiZPc6jBQ9wThaBnvaoB4xHoxI0r9U-p2Vjdvh1VNWi8xoDCfflSa87eZAhsIIV4JompMDw5XpJX7xgtj8tWABoxt5rejG9HmQ2f-RJ5P8QQNSA7ti7_kKoqn1XFzc6lsc8P7YJMYumuvY3Bnjn4SEjh6Cm_-6aG')" }}
          ></div>
        </div>
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-16 w-full grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-6 bg-white/85 backdrop-blur-md p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#005098] mb-4 leading-tight">
              Bảo vệ Vững chắc,<br/>Tương lai An tâm
            </h1>
            <p className="text-slate-600 text-base sm:text-lg mb-8 leading-relaxed">
              PTI Insurance cung cấp các giải pháp bảo hiểm toàn diện, bảo vệ bạn và gia đình trước mọi rủi ro trong cuộc sống. Trải nghiệm dịch vụ chuyên nghiệp và tận tâm.
            </p>
            <button className="bg-[#f26522] text-white font-bold px-8 py-3.5 rounded-full hover:bg-orange-600 transition shadow-md">
              Nhận Báo Giá
            </button>
          </div>
        </div>
      </section>

      {/* Về Chúng Tôi */}
      <section className="py-20 bg-[#f7fafd]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#005098] text-center mb-12">Về Chúng Tôi</h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8 bg-white border border-slate-200 rounded-2xl p-8 sm:p-10 shadow-sm flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-[#005098] mb-4">Sứ mệnh của PTI</h3>
              <p className="text-slate-600 text-base leading-relaxed mb-6">
                Chúng tôi cam kết mang lại sự an tâm tuyệt đối cho khách hàng thông qua các sản phẩm bảo hiểm đột phá, dịch vụ bồi thường nhanh chóng và minh bạch. Với nền tảng tài chính vững mạnh, PTI tự hào là lá chắn vững chắc cho mọi gia đình và doanh nghiệp Việt Nam.
              </p>
              <a className="text-[#005098] font-bold inline-flex items-center hover:underline" href="#">
                Tìm hiểu thêm <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
              </a>
            </div>
            <div className="md:col-span-4 bg-[#005098] text-white rounded-2xl p-8 sm:p-10 shadow-md flex flex-col justify-between">
              <div>
                <span className="material-symbols-outlined text-4xl mb-4 text-blue-200">verified_user</span>
                <h4 className="text-2xl sm:text-3xl font-extrabold mb-1">25+ Năm</h4>
                <p className="text-sm text-blue-100">Kinh nghiệm trong ngành bảo hiểm phi nhân thọ.</p>
              </div>
              <div className="mt-8 pt-6 border-t border-white/20">
                <h4 className="text-2xl sm:text-3xl font-extrabold mb-1">3 Triệu+</h4>
                <p className="text-sm text-blue-100">Khách hàng tin dùng trên toàn quốc.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Đội ngũ chuyên gia */}
      <section className="py-20 bg-[#f1f4f7]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#005098] text-center mb-3">Đội ngũ chuyên gia</h2>
          <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto text-base">Tự hào sở hữu đội ngũ chuyên gia hàng đầu, tận tâm và am hiểu sâu sắc về thị trường bảo hiểm.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="h-64 w-full bg-slate-100">
                <img className="object-cover w-full h-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVZXySNEjnbFmx4IXmCvRWQ_-Iy2UISu5MUvWch71vlIyEN-vYTQ13ottarwdpihLARWKA1lzVdMGItMmmjwuGWsj7SmRLvm83HbfelEzoqAe-TS-oa-o-5zru0MJF8hS9ce9VLnVd-bc2djrQegqAf9_hORfnAE5vPJWA73AabFxZQCPISPTLw6Vl_YqDQKuPSX9W3mswjSGyObz5PQCHHR6CUuIrWaF9HKnpG4Q4_yMPhXR5zlJb"/>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-lg text-slate-900 mb-1">Nguyễn Văn A</h4>
                <p className="text-sm text-[#005098] font-semibold mb-3">Giám đốc Khối Bồi thường</p>
                <p className="text-xs text-slate-500 leading-relaxed">Chuyên gia giám định với hơn 15 năm kinh nghiệm, đảm bảo quyền lợi tối đa cho khách hàng.</p>
              </div>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="h-64 w-full bg-slate-100">
                <img className="object-cover w-full h-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUY51O2mTG8wDJmwiGJX40pVjJM7X-C95kTANC04ucEd62c57MPPz_CKgJFQYVd167n-DpLTjXDML1KpE1k--EVah0A9kTNlfTVj05GlAO667vaSzTWJ8tUMrY2jwGrpYS4wHjf2k3jq_-jmZQMk3hEQQJ4tVk4XImhPDa2GWB85NmKCot20MGvadTXqLge7kxljs8I4la80Pn8xxzgkmYss3rl1kLJevkbvdYew-MltruBJ7oRskU"/>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-lg text-slate-900 mb-1">Trần Thị B</h4>
                <p className="text-sm text-[#005098] font-semibold mb-3">Chuyên gia Định phí</p>
                <p className="text-xs text-slate-500 leading-relaxed">Thạc sĩ Toán Kinh tế, chuyên thiết kế các sản phẩm bảo hiểm cạnh tranh và bền vững.</p>
              </div>
            </div>
            <div className="bg-white border border-slate-200 border-t-4 border-t-[#005098] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="h-64 w-full bg-slate-100">
                <img className="object-cover w-full h-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFKYgAyDzBnXSevmbiianMhOW2gwIQQqCoLRNveZbp9-zkLqG3tS5jxHXwLMy9MqKnL0QyFqE-7LIUrFmyBOQvceiwWvMI9dDQyrba7HPHN8bnm9yEG_zIQ7bTo2THJUMTe1BDn2AZmfE5aTHNZPQ4iI1c6B82Ozng9ru2bXnyekUpcUoPi0kKSJE-IA4PwgdK16bJYflrFkB4Q24o3Rb6yTqI8yYiLjtgM-B1eAhN-ySi0eMa0deO"/>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-lg text-slate-900 mb-1">Lê Hoàng C</h4>
                <p className="text-sm text-[#005098] font-semibold mb-3">Trưởng phòng Dịch vụ KH</p>
                <p className="text-xs text-slate-500 leading-relaxed">Cam kết mang đến trải nghiệm xuất sắc, hỗ trợ khách hàng 24/7 với sự thấu hiểu.</p>
              </div>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="h-64 w-full bg-slate-100">
                <img className="object-cover w-full h-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3C47mMzwwKOZsoo35fnOrU9psUOmuDsg0tvR3pqmoKQEZ9bk-YKRjX0LWBaafAznFR78pdKhwiTIJOxVWifwK8bnK00tkCf3OrR4grUjJBoeNdB9SxaU3dDzW4SiTDhiFdbX7L_Zp_TF_rfcroETW6eEP1Orr1FT1Bt2iKQ6IAjnO0qNmBsGTHuDr6UmmBB9xnS5OnLlsMfxFhs6APjTcSO1JtXnDHwESxmJF9LTsrNrCWgKYQosq"/>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-lg text-slate-900 mb-1">Phạm Quỳnh D</h4>
                <p className="text-sm text-[#005098] font-semibold mb-3">GĐ Phát triển Mạng lưới</p>
                <p className="text-xs text-slate-500 leading-relaxed">Mở rộng hệ thống gara và bệnh viện liên kết, mang lại sự tiện lợi tối đa cho người được bảo hiểm.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Đối tác chiến lược */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#005098] mb-12 text-center">Đối tác chiến lược</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center p-6 bg-white border border-slate-200 rounded-xl font-bold text-slate-700 text-xl shadow-sm hover:border-[#005098] transition">HSBC</div>
            <div className="flex items-center justify-center p-6 bg-white border border-slate-200 rounded-xl font-bold text-slate-700 text-xl shadow-sm hover:border-[#005098] transition">UOB</div>
            <div className="flex items-center justify-center p-6 bg-white border border-slate-200 rounded-xl font-bold text-slate-700 text-xl shadow-sm hover:border-[#005098] transition">VIB</div>
            <div className="flex items-center justify-center p-6 bg-white border border-slate-200 rounded-xl font-bold text-slate-700 text-xl shadow-sm hover:border-[#005098] transition">PVI</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#005098] text-white py-12">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="text-lg font-bold mb-4">Tổng công ty Cổ phần<br/>Bảo hiểm Bưu điện</div>
            <p className="text-sm text-blue-100 mb-1">1900 54 54 75</p>
            <p className="text-sm text-blue-100">info@pti.com.vn</p>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-blue-200 mb-4">Liên kết</h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li><a href="#" className="hover:text-white">Khách hàng cá nhân</a></li>
              <li><a href="#" className="hover:text-white">Khách hàng doanh nghiệp</a></li>
              <li><a href="#" className="hover:text-white">Bài viết hữu ích</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-blue-200 mb-4">Về chúng tôi</h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li><a href="#" className="hover:text-white">Về PTI</a></li>
              <li><a href="#" className="hover:text-white">Chính sách & Điều khoản</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16 mt-12 pt-8 border-t border-white/20 text-center text-xs text-blue-200">
          Điều khoản sử dụng © 2024 Phát triển bởi PTI
        </div>
      </footer>
    </div>
  );
}